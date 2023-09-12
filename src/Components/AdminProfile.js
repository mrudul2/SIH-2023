import React from "react";
import profilestyle from "../Styles/Profile.module.css";
const AdminProfile = ({ setUserState, username }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome AD-{username} !!</h1>
      <button
        className={profilestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};
export default AdminProfile;
