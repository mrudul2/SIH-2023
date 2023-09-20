import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import BackgroundVideo from "../Assets/Videos/background.mp4";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointmentForm");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <video src={BackgroundVideo} autoPlay loop muted className="video" />
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <p className="text-headline">❤️ Prioritizing Your Health</p>
            <h2 className="text-title">
              Connect with a Doctor and Schedule Appointments
            </h2>
            <p className="text-descritpion" style={{ marginLeft: "20vh" }}>
              Consult with healthcare professionals online, receive medical
              advice, prescriptions, refills, and medical notes quickly. Access
              on-demand healthcare services conveniently.
            </p>

            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>145k+</p>
                <p>Receive Patients</p>
              </div>

              <div className="text-stats-container">
                <p>50+</p>
                <p>Expert Doctors</p>
              </div>

              <div className="text-stats-container">
                <p>10+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          {/* <div className="hero-image-section">
            <img className="hero-image1" src={Doctor} alt="Doctor" />
          </div> */}
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>
    </>
  );
}

export default Hero;
