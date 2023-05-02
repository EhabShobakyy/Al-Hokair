import React from "react";
// Routing
import { NavLink, Outlet } from "react-router-dom";
// Style
import "./chartNav.css";

function chartNav() {
  return (
    <div>
      <nav className="component-nav  container-lg d-flex justify-content-between">
        <NavLink to="stockChart" className="col-6">
          Stock Chart
        </NavLink>
        <NavLink to="historicalTrading" className="col-6">
          Historical Trading Data
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default chartNav;
