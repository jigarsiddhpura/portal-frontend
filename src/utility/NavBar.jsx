import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      {" "}
      <nav className="rectangle-parent">
        <div className="group-child" />
        <div className="home">{`Home `}</div>
        <div className="courses">Courses</div>
        <div className="research">Research</div>
        <div className="interview">Interview</div>
        <div className="log-in">Log in</div>
        <button className="rectangle-group">
          <div className="group-item" />
          <div className="registration">Registration</div>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
