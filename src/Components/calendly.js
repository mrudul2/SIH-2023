import React,{useState} from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import {app, database} from "../firebaseConfig"
import "../App.css"
import Modal from 'react-modal';
import Swal from "sweetalert2";
import {collection, query, where, addDoc, getDocs,doc,updateDoc } from "firebase/firestore";

function Calendly() {
  const navigate = useNavigate()
  const [timeSlot,setTimeSlot]=useState("");
  const [dateSlot,setDateSlot]=useState("");
  const [patientName, setPatientName] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const openConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  

  const fetchPatientId = async () => {
    const patientsCollection = collection(database, 'patients');
    console.log(patientName)
    const queryCriteria = where('Name', '==', patientName); 
  
    try {
      const querySnapshot = await getDocs(query(patientsCollection, queryCriteria));
  
      if (querySnapshot.size === 0) {
        alert('Patient not found');
        return null;
      }
  
      return querySnapshot.docs[0].id;
    } catch (error) {
      alert('Error fetching patient data: ' + error.message);
      return null;
    }
  };
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const updateData = async () =>{
    const patientId = await fetchPatientId(patientName);

    if (!patientId) {
      return; 
    }
    const docToUpdate = doc(database,"patients",patientId)

    const updatedData = {
      TimeSlot: timeSlot,
      DateSlot: dateSlot,
    };
    updateDoc(docToUpdate,updatedData)
    .then(()=>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Appointment Booked Successfully',
        showConfirmButton: false,
        timer: 3500
      })
      
      navigate('/');
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

  return (
    <div style={{fontFamily:"Poppins"}}>
    <iframe
        title="Calendly Appointment Scheduler"
        src="https://calendly.com/aish07-ravi/book-an-appointment"
        style={{ width: '100%', height: '800px', border: 'none' }}
      ></iframe>
      <button className='google-signup-button' style={{marginLeft:"180vh"}} onClick={openConfirmation}>Next</button>
      <Modal isOpen={isConfirmationOpen} style={modalStyles}>
        <div style={{display:"flex",gap:"65vh"}}>
        <h2>Self-Declaration Form</h2>
        <button style={{transform:"scale(0.75)"}}onClick={closeConfirmation}>x</button>
        </div>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date Slot"
          value={dateSlot}
          onChange={(e) => setDateSlot(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time Slot"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        <input
        type='checkbox'
        /> I hereby confirm that the information I have provided is accurate to the best of my knowledge.
        <br/>
        <br/>
        <button onClick={fetchPatientId}>Save Changes</button>
        <button onClick={updateData}>Confirm</button>
        
      </Modal>
    </div>
    
  )
}

export default Calendly;