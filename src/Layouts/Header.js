import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click); // Toggle NavBar
  const Close = () => setClick(false); // Close Icon
  return (
    <>
      <div className="main-nav">
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "bi bi-x-circle" : "bi bi-list"}></i>
              </div>
              <div className="investor-nav">
                <h3>Investor </h3>
                <h3>Relations </h3>
                <p className="my-2">+878745454</p>
                <p className="my-2">IR@Alhokair.com</p>
              </div>
              <li className="nav-item">
                <NavLink
                  end
                  to={{ pathname: "/" }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Overview
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/profile",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/ChartPage/stockChart",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Chart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/DiscloserPage/discloser"
                  onClick={click ? handleClick : null}
                >
                  Disclosure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/BoardManagementPage/board"
                  onClick={click ? handleClick : null}
                >
                  Board and Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/corporateActions/CapitalChange",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Corporate Actions
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/investmentCalculator",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Investment Calculator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/majorShareholders",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  MajorS hareholders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/negotiatedDeals",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Negotiated Deals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/financialStatments",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Financial Statments
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/FinancialRatiosPage",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  FinancialRatios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/financialReports",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  financial Reports
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/investorsPresentations",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  investors Presentations
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/businessSegment",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Business Segment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/projects",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/analystCoverage",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Analyst Coverage
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/subscription",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Subscription Center
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "" : "bi bi-list"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
