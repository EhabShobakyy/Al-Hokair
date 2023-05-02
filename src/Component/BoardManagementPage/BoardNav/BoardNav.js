import React from "react";
// Routing
import { NavLink, Outlet } from "react-router-dom";
// Style
import "./BoardNav.css";

function BoardNav() {
  return (
    <div>
      <nav className="component-nav  container-lg d-flex justify-content-between">
        <NavLink to="board" className="col-3">
          Board
        </NavLink>
        <NavLink to="excutives" className="col-3">
          Excutives
        </NavLink>
        <NavLink to="salaries" className="col-3">
          Salaries & Bounses
        </NavLink>

        <NavLink to="boardDirectors" className="col-3">
          Board of Directors
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default BoardNav;
