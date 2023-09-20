import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import Select from "react-select";
import axios from "axios";

function AppointmentFormDoctor() {
  const navigate = useNavigate();
  const collectionRef = collection(database, "patients");
  const location = useLocation(); // Get the current location
  const { doctorName } = location.state || {}; // Get the doctorName from the location state

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchSymptoms = async () => {
      const apiUrl = "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpc2gxMjMucmF2aUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEyOTEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIzLTA5LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTUxNjM1MDcsIm5iZiI6MTY5NTE1NjMwN30.n-D9-1ts8G2iwVhZZbtSOodQv5ICZNM61EP3_WlRLxQ&format=json&language=en-gb";
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setResult(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchSymptoms();
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [patientAge, setPatientAge] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("default");
  const [preferredMode, setPreferredMode] = useState("default");
  const [patientSymptoms, setPatientSymptoms] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [timeSlot, setTimeSlot] = useState("");
  const [dateSlot, setDateSlot] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedSymptomsList, setSelectedSymptomsList] = useState([]);

  const [selectedDoctorName, setSelectedDoctorName] = useState(
    doctorName || ""
  ); // Initialize with the doctorName from the location state

  const handleSubmit = (e) => {
    e.preventDefault();
    const symptomLabels = selectedSymptomsList.map((symptom) => symptom.label);
    // setPatientSymptoms(selectedSymptomsList)
    addDoc(collectionRef, {
      Name: patientName,
      Contact: patientNumber,
      Gender: patientGender,
      AppType: appointmentType,
      Symptoms: symptomLabels,
      Mode: preferredMode,
      TimeSlot: timeSlot,
      DateSlot: dateSlot,
    })
      .then(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Thank you for filling out the form, please proceed to book your appointment slot',
          showConfirmButton: false,
          timer: 3500
        })
        navigate("/bookappointment");
      })
      .catch((err) => {
        alert(err.message);
      });

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setPatientAge("");
    setAppointmentType("");
    setPatientSymptoms("");
    setPreferredMode("default");
    setFormErrors({});

    navigate("/form-submit", {
      state: {
        formData: {
          patientName,
          patientNumber,
          patientGender,
          patientAge,
          appointmentType,
          preferredMode,
        },
      },
    });

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  const handleAddSymptom = () => {
    if (selectedSymptom) {
      setSelectedSymptomsList([...selectedSymptomsList, selectedSymptom]);
      setSelectedSymptom(null);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!result) {
    return <div>Loading...</div>;
  }

  const options = result.map((symptom) => ({
    value: symptom.ID,
    label: symptom.Name,
  }));

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient's Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Patient's Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            Patient's Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="private">Prefer not to say</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            Patient's Age:
            <input
              type="number"
              min="1"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Appointment Type:
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Follow-Up Checkup">Follow-Up Checkup</option>
              <option value="Emergency">Emergency</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>
          <br />

          <label>
            Symptoms:
            <Select
              options={options}
              value={selectedSymptom}
              onChange={(selectedOption) => setSelectedSymptom(selectedOption)}
              placeholder="Select a symptom"
              isSearchable={true}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              type="button"
              onClick={handleAddSymptom}
            >
              Add Symptom
            </button>
            {selectedSymptomsList.length > 0 && (
              <div className="selected-symptoms-list">
                <h3>Selected Symptoms:</h3>
                <ul>
                  {selectedSymptomsList.map((symptom, index) => (
                    <li key={index}>{symptom.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </label>
          <br />
          <label>
            Provide Details of any ongoing Medications or Allergies:
            <input type="text" />
          </label>
          <br />
          <label>
            Provide Details of Relevant Diagnosis(Medical History):
            <input type="text" />
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="online">Online</option>
              <option value="In-person">In-person</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Proceed to Book Appointment Slot
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details has been sent to the patients phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentFormDoctor;
