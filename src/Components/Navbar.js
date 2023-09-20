import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Assets/Images/Logo/logo1.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <Link to={"/doctors"} className="navbar-links">
            Doctors
          </Link>
        </li>
        <li>
          <a
            href="http://localhost:3000/SwasthSaathi/medicinedelivery"
            className="navbar-links"
          >
            Medicine
          </a>
        </li>

        <li>
          {/* Dropdown for regular login */}
          <div className="navbar-dropdown">
            <span className="navbar-links">User</span>
            <ul className="navbar-dropdown-content">
              <li>
                <Link to="/user-login" className="navbar-links">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/user-register" className="navbar-links">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          {/* Dropdown for admin login */}
          <div className="navbar-dropdown">
            <span className="navbar-links">Admin</span>
            <ul className="navbar-dropdown-content">
              <li>
                <Link to="/admin-login" className="navbar-links">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/admin-register" className="navbar-links">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} />
        <Link to="/chatroom" className="linkTo">
          Live Chat
        </Link>
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
          <li>
            {/* Mobile dropdown for regular login */}
            <div className="navbar-dropdown">
              <span className="navbar-links">User</span>
              <ul className="navbar-dropdown-content">
                <li>
                  <Link onClick={openNav} to="/user-login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link onClick={openNav} to="/user-register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {/* Mobile dropdown for admin login */}
            <div className="navbar-dropdown">
              <span className="mobile-navbar-links">Admin</span>
              <ul className="navbar-dropdown-content">
                <li>
                  <Link onClick={openNav} to="/admin-login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link onClick={openNav} to="/admin-register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
