import React from "react";
// Routing
import { NavLink, Outlet } from "react-router-dom";
// Style
import "./DisclousreNav.css";

function DisclousreNav() {
  return (
    <>
      <nav className="component-nav container-lg d-flex justify-content-between">
        <NavLink to="discloser" className="col-3">
          Discloser
        </NavLink>
        <NavLink to="news" className="col-3">
          News
        </NavLink>
        <NavLink to="calendar" className="col-3">
          Calendar Events
        </NavLink>
        <NavLink to="analystEstimates" className="col-3">
          Analyst Estimates
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default DisclousreNav;
