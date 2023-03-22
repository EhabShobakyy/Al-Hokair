import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click); // Toggle NavBar
  const Close = () => setClick(false); // Close Icon
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="nav-bar ">
              <div className="investor-nav">
                <h3>Investor </h3>
                <h3>Relations </h3>
                <p>+878745454</p>
                <p>IR@Alhokair.com</p>
              </div>
              <nav>
                <div id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/DiscloserPage/discloser"
                      >
                        Disclosure
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/board">
                        Board
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/chart">
                        Chart
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/investment">
                        investment calculator
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/majorShare">
                        Major Share
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Negoitated">
                        Negoitated
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/financialStatment">
                        financialStatment
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/financialRatios">
                        financialRatios
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/financialReports">
                        financialReports
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/investorPresentations">
                        investor Presentations
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/BusinessSegment">
                        Business Segment
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/corporateActions">
                        Corporate Actions
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/analystCoverage">
                        analyst Coverage
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/disclosures">
                        Disclosures
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav> */}

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
                  exact
                  to={{ pathname: "/" }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Overview
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/profile",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/DiscloserPage/discloser"
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                >
                  Disclosure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-links"
                  to="/board"
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                >
                  Board and Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/chart",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Chart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/investmentCalculator",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Investment Calculator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/majorShareholders",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  MajorS hareholders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/negotiatedDeals",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Negotiated Deals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/financialStatments",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Financial Statments
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/FinancialRatiosPage",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  FinancialRatios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/financialReports",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  financial Reports
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/investorsPresentations",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  investors Presentations
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/businessSegment",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Business Segment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/corporateActions",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Corporate Actions
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/projects",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/analystCoverage",
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Analyst Coverage
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/subscription",
                  }}
                  activeClassName="active"
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
