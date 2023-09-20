import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function DoctorCard(props) {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointmentForm", { state: { doctorName: props.name } });
  };

  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
      <p className="dt-card-stars">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#F7BB50", paddingRight: "6px", marginBottom: "5px" }}
        />
        {props.stars}
        <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
      <button
        style={{ marginTop: "10px" }}
        className="text-appointment-btn"
        type="button"
        onClick={handleBookAppointmentClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;
