import React from "react";
// Routing
import { NavLink, Outlet } from "react-router-dom";
// Style
import "./CorporateActionNav.css";

function CorporateActionNav() {
  return (
    <div>
      <nav className="component-nav  container-lg d-flex justify-content-between">
        <NavLink to="CapitalChange" className="col-3">
          Capital Change
        </NavLink>
        <NavLink to="HistoricalDivindes" className="col-3">
          Historical Divindes
        </NavLink>
        <NavLink to="RecentChange" className="col-3">
          Recent Change
        </NavLink>
        <NavLink to="RecentDivindes" className="col-3">
          Recent Divindes
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default CorporateActionNav;
