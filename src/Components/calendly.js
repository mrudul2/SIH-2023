import React,{useState} from 'react'
import {app, database} from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore";

function Calendly() {
  const [timeSlot,setTimeSlot]=useState("");
  const [dateSlot,setDateSlot]=useState("");

  return (
    <div>
    <iframe
        title="Calendly Appointment Scheduler"
        src="https://calendly.com/aish07-ravi/book-an-appointment"
        style={{ width: '100%', height: '800px', border: 'none' }}
      ></iframe>
    </div>
    
  )
}

export default Calendly;