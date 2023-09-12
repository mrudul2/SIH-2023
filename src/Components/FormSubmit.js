import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/AppointmentForm.css";

const FormSubmit = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="form-container" >
      <h2 className="form-title">Form Summary</h2>
      <div className="form-content">
        <label>
          {" "}
          <b> Patient Name: </b> {formData.patientName}
        </label>
        <label>
          {" "}
          <b> Patient Phone Number: </b> {formData.patientNumber}
        </label>
        <label>
          {" "}
          <b> Patient Gender:</b> {formData.patientGender}
        </label>
        <label>
          {" "}
          <b> Doctor Name:</b> {formData.selectedDoctorName}
        </label>
        <label>
          {" "}
          <b> Appointment Slot: </b> {formData.selectedAppointmentSlot}
        </label>
        <label>
          {" "}
          <b> Preferred Mode:</b> {formData.preferredMode}
        </label>
      </div>
    </div>
  );
};

export default FormSubmit;
