import React, { useEffect, useState } from "react";
// Token
import useToken from "../../../Hooks/useToken";
//Routing
import { Link, useParams, useSearchParams } from "react-router-dom";
// Style
import "./organizationPopup.css";

function PersonalDetails() {
  let params = useParams();
  const personId = params.individualID;

  // Board Management Page Data
  const memberDetailsData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`
  );
  const memberDetails = memberDetailsData?.individuals;

  // function to print '-' if doesn't has a value
  const chaeckEmpty = (string) => (string === "" ? "-" : string);
  // variable to get pesrson info
  const filterd = memberDetails?.filter((person) => {
    return person.individualID == personId;
  });

  // for loop to solve proplem of access first Index in array
  for (var n in filterd) {
    var personInfo = filterd[n];
  }

  // varaible to back in the parent path of popup
  let urlValue = window.location.pathname.split("/")[2];

  console.log(personInfo);

  return (
    <div className="popup-body my-4">
      <div className="board-body">
        <div className="boards-popup active-chart" id="boards-popup">
          <div className="container-lg">
            <div className="d-flex my-4">
              <img
                src={personInfo?.profilePicURL}
                className="col-2"
                alt="Person Image"
              />
              <h3 className="board-title d-flex justify-content-between align-items-center col-10 ">
                {personInfo?.nameEn}
                <Link
                  to={`/BoardManagementPage/${urlValue}`}
                  className="close-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </Link>
              </h3>
            </div>
            <p className="highlights my-3">Highlights</p>
            <p className="highlights-content my-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: personInfo?.resumeHighLightEn,
                }}
              ></div>
            </p>

            <p className="key-dates my-1">key Dates</p>
            <div className="boards-popup-table">
              <table>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Position Name</th>
                    <th>started On</th>
                    <th>Ended On</th>
                  </tr>
                </thead>

                <tbody>
                  {personInfo?.positionHistory?.map((list, id) => {
                    return (
                      <>
                        <tr>
                          <td>{list?.companyNameEn}</td>
                          <td>{list?.positionNameEn}</td>
                          <td>{chaeckEmpty(list?.startedOn)}</td>
                          <td>{chaeckEmpty(list?.endedOn)}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
