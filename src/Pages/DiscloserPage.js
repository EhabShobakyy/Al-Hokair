import React from "react";
import DisclosureComponent from "../Component/DisclosurePage/DisclosureComponent/DisclosureComponent";
import News from "../Component/DisclosurePage/News/News";
import Disclosure from "../Component/DisclosurePage/DisclosureComponent/DisclosureComponent";
// DisclousreNavBar
import DisclousreNav from "../Component/DisclosurePage/DisclousreNav/DisclousreNav";
// Routing
import { NavLink, Outlet } from "react-router-dom";

function DiscloserPage() {
  return (
    <div className="container-lg">
      <h1>DiscloserPage</h1>
      {/* <DisclousreNav /> */}

      <nav className="component-nav container-lg d-flex justify-content-between">
        <NavLink to="discloser" className="col-3">
          Discloser
        </NavLink>
        <NavLink to="news" className="col-3">
          News
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default DiscloserPage;
