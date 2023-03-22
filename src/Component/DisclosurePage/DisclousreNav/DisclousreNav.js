import React from "react";
// Routing
import { NavLink } from "react-router-dom";
// Style
import "./DisclousreNav.css";

function DisclousreNav() {
  return (
    <>
      <nav className="component-nav container-lg d-flex justify-content-between">
        <NavLink className="col-3" to="/discloser">
          Discloser
        </NavLink>
        <NavLink className="col-3" to="/news">
          News
        </NavLink>
        <NavLink className="col-3" to="/calendarEvents">
          Calendar Events
        </NavLink>
        <NavLink className="col-3" to="/analystEstimates">
          Analyst Estimates
        </NavLink>
      </nav>
    </>
  );
}

export default DisclousreNav;
