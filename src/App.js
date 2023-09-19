import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Components/About";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Reviews from "./Components/Reviews";
import Doctors from "./Components/Doctors";
import Navbar from "./Components/Navbar";
import FormSubmit from "./Components/FormSubmit";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminRegister from "./Components/AdminRegister";
import UserRegister from "./Components/UserRegister";
import UserProfile from "./Components/UserProfile";
import AdminProfile from "./Components/AdminProfile";
import Chatroom from "./Chatroom/Chatroom";
import Calendly from "./Components/calendly";
import APItesting from "./Components/apitesting";
import MainMap from "./EmergencyMap/MainMap";
import AppointmentForm from "./Components/AppointmentForm";

function App() {
  const [userState, setUserState] = useState({});
  const [adminState, setAdminState] = useState({});

  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointmentForm" element={<AppointmentForm />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/about" element={<About />} />
          <Route path="form-submit" element={<FormSubmit />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/bookappointment" element={<Calendly />} />
          <Route path="/apitesting" element={<APItesting />} />
          <Route path="/emergencymap" element={<MainMap />} />

          <Route
            path="/user-login"
            element={
              userState._id ? (
                <Navigate to="/user-profile" />
              ) : (
                <UserLogin setUserState={setUserState} />
              )
            }
          />

          <Route
            path="/user-register"
            element={
              userState._id ? (
                <Navigate to="/user-profile" />
              ) : (
                <UserRegister setUserState={setUserState} />
              )
            }
          />

          <Route
            path="/user-profile"
            element={
              userState._id ? (
                <UserProfile userState={userState} />
              ) : (
                <Navigate to="/user-login" />
              )
            }
          />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin-register"
            element={
              adminState._id ? (
                <Navigate to="/admin-profile" />
              ) : (
                <AdminRegister setAdminState={setAdminState} />
              )
            }
          />

          <Route
            path="/admin-profile"
            element={
              adminState._id ? (
                <AdminProfile adminState={adminState} />
              ) : (
                <Navigate to="/admin-login" />
              )
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
