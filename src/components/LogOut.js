import React from "react";
import "./styles/LogOut.css";

const LogOut = () => {
  const refreshHandler = () => {
    return window.location.reload();
  };

  return (
    <div className="logout">
      <button className="logoutButton">
        <i className="fas fa-power-off" onClick={refreshHandler}></i>
      </button>
    </div>
  );
};

export default LogOut;
