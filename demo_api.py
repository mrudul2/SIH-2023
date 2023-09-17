import tensorflow as tf
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
import pandas as pd
from flask import Flask, request, jsonify, g
from queue import Queue
import threading
import heapq
import time
import uuid  # For generating unique IDs
import firebase_admin
from firebase_admin import credentials, db
from google.oauth2 import service_account
from googleapiclient.discovery import build
import datetime

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path/to/your/serviceAccountKey.json")  # Replace with your own JSON key file
firebase_admin.initialize_app(cred, {'databaseURL': 'https://your-database-url.firebaseio.com'})

# Load the Google Calendar API credentials
credentials = service_account.Credentials.from_service_account_file('path/to/your/credentials.json', ['https://www.googleapis.com/auth/calendar.readonly'])

# Build the Google Calendar API service
calendar_service = build('calendar', 'v3', credentials=credentials)

def build_model(input_dim):
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(128, activation='relu', input_shape=(input_dim,)),
        tf.keras.layers.Dense(64, activation='relu'),
        tf.keras.layers.Dense(32, activation='relu'),
        tf.keras.layers.Dense(64, activation='relu'),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(1)
    ])
    model.compile(optimizer='adam', loss='mean_squared_error')
    return model

def data_stream(num_samples, feature_dim):
    for _ in range(num_samples):
        data_from_web_page = {
            'patient_name': np.random.choice(['Alice', 'Bob', 'Charlie', 'David', 'Eve']),
            'patient_age': np.random.randint(18, 80),
            'patient_gender': np.random.choice(['Male', 'Female']),
            'diagnosis': np.random.choice(['Fever', 'Cough', 'Headache', 'Sprain', 'Infection']),
            'doctor_type': np.random.choice(['Specialist', 'General Practitioner']),
            'doctor_specialty': np.random.choice(['Cardiology', 'Orthopedics', 'Dermatology', 'ENT', 'Oncology'])
        }
        
        features = [
            data_from_web_page['patient_age'],
            1 if data_from_web_page['patient_gender'] == 'Male' else 0,
            1 if data_from_web_page['patient_gender'] == 'Female' else 0,
            1 if data_from_web_page['doctor_type'] == 'Specialist' else 0,
            1 if data_from_web_page['doctor_type'] == 'General Practitioner' else 0,
        ]
        
        feature_vector = np.array(features)
        
        consultation_duration = np.random.randint(20, 60)
        
        yield feature_vector, consultation_duration

scaler = StandardScaler()
label_encoder = LabelEncoder()

model_dict = {}
request_queue = Queue()
priority_queue = []

# Function to calculate time left for the appointment
def calculate_time_left(doctor_schedule, consultation_duration):
    current_time = datetime.datetime.utcnow()  # Current time in UTC
    for event in doctor_schedule:
        start_time = datetime.datetime.fromisoformat(event['start_time'])
        end_time = datetime.datetime.fromisoformat(event['end_time'])
        if start_time <= current_time <= end_time:
            time_left = (end_time - current_time).seconds / 60  # Convert to minutes
            if time_left < consultation_duration:
                return time_left
    return 0

# Function to generate a unique ID
def generate_unique_id():
    return str(uuid.uuid4())

# Function to fetch doctor's schedule from Google Calendar
def get_doctor_schedule():
    calendar_id = 'primary'  # Use the calendar ID of the doctor's Google Calendar

    # Define the time frame for the calendar events query
    now = datetime.datetime.utcnow()
    time_min = now.isoformat() + 'Z'  # Current time
    time_max = (now + datetime.timedelta(days=7)).isoformat() + 'Z'  # One week from now

    # Query the Google Calendar API for events
    events_result = calendar_service.events().list(
        calendarId=calendar_id,
        timeMin=time_min,
        timeMax=time_max,
        maxResults=10,  # Maximum number of events to fetch
        singleEvents=True,
        orderBy='startTime'
    ).execute()

    events = events_result.get('items', [])

    # Extract and return the doctor's schedule
    doctor_schedule = []
    for event in events:
        start_time = event['start'].get('dateTime', event['start'].get('date'))
        end_time = event['end'].get('dateTime', event['end'].get('date'))
        doctor_schedule.append({'start_time': start_time, 'end_time': end_time})

    return doctor_schedule

@app.route('/predict_duration', methods=['POST'])
def predict_duration():
    data = request.json
    priority = data.get('priority', 'General Consultation')
    request_queue.put({'priority': priority, **data})
    return jsonify({'message': 'Request received. Processing...'})

def push_to_database(patient_details):
    try:
        ref = db.reference('appointments')
        appointment_ref = ref.child(patient_details['patient_id'])
        if not appointment_ref.get():
            appointment_ref.set(patient_details)
        else:
            return jsonify({'message': 'Appointment details already in the database. Rescheduling not allowed.'})
    except Exception as e:
        return jsonify({'error': str(e)})

def process_request():
    while True:
        data = request_queue.get()
        if data is None:
            break
        
        try:
            patient_name = data['patient_name']
            doctor_specialty = data['doctor_specialty']
            doctor_type = data['doctor_type']
            
            priority = data['priority']
            
            model_key = f"{patient_name}_{doctor_specialty}_{doctor_type}"
            
            if model_key not in model_dict:
                input_dim = 15
                model_dict[model_key] = build_model(input_dim)
            
            model = model_dict[model_key]
            
            features = [
                data['patient_age'],
                1 if data['patient_gender'] == 'Male' else 0,
                1 if data['patient_gender'] == 'Female' else 0,
                1 if data['doctor_type'] == 'Specialist' else 0,
                1 if data['doctor_type'] == 'General Practitioner' else 0,
            ]
            
            feature_vector = np.array(features)
            feature_vector = scaler.transform(feature_vector.reshape(1, -1))
            
            consultation_duration = np.random.randint(20, 60)
            
            doctor_schedule = get_doctor_schedule()  # Fetch doctor's schedule
            
            time_left = calculate_time_left(doctor_schedule, consultation_duration)
            
            if time_left <= 20:
                patient_details = {
                    'patient_id': generate_unique_id(),
                    'patient_name': patient_name,
                    'doctor_specialty': doctor_specialty,
                    'doctor_type': doctor_type,
                    'predicted_duration': consultation_duration,
                    'priority': priority,
                    'appointment_time': int(time.time())
                }
                push_to_database(patient_details)
            else:
                model.fit(feature_vector, np.array([consultation_duration]), epochs=1, verbose=0)
                predicted_duration = model.predict(feature_vector)
                g.responses.append({'predicted_duration': predicted_duration[0][0], 'priority': priority})
        
        except Exception as e:
            g.responses.append({'error': str(e), 'priority': priority})

if __name__ == '__main__':
    app.run(debug=True)
