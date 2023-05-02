import React, { useState } from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Disclousre Nav
import DisclousreNav from "../DisclousreNav/DisclousreNav";
// Format Date
import moment from "moment";
// Style
import "./CalendarComp.css";

function CalendarComp() {
  // Calendar Data
  const disclosurePage = useToken(
    "https://data.argaam.com/api/v1.0/json/ir-api/overview/en"
  );
  const calenderData = disclosurePage?.events;

  console.log("calender Data", calenderData);
  return (
    <>
      <div className="calender-events container-lg">
        <h3>Calendar</h3>
        <table className="calenar-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Events</th>
              <th>Theme</th>
              <th>Company</th>
              <th>Venue</th>
              <th>Details</th>
            </tr>
          </thead>
          {calenderData?.slice(0, 5)?.map((item, id) => {
            return (
              <tbody
                key={id}
                className="accordion accordion-flush"
                id={`${id}`}
              >
                <tr className="accordion-item">
                  <td>{moment(item?.occursOn)?.format("DD/MM/YYYY")}</td>
                  <td>{item?.titleEn}</td>
                  <td>{item?.typeNameEn}</td>
                  <td>{item?.companyNameEn}</td>
                  <td>-</td>

                  <td id={id}>
                    <button
                      className="accordion-button collapsed close-sign"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${id}`}
                    ></button>
                  </td>
                </tr>
                <tr
                  key={id}
                  className={`data-${id}  accordion-body accordion-collapse collapse`}
                  id={`collapse${id}`}
                  aria-labelledby={`${id}`}
                  data-bs-parent="#accordionExample"
                >
                  <td colSpan="12">
                    <h6 className="calender-title my-2 ">{item?.titleEn}</h6>
                    <div className="d-flex justify-content-between">
                      <p>Market</p>
                      <p>{item?.marketNameEn}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Company</p>
                      <p>ABCD</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p>Date</p>
                      <p>
                        {moment(item?.occursOn)?.format("DD/MM/YYYY")}
                        <span className="mx-2">
                          {moment(item?.occursOn)?.format("hh:m:ss")}
                        </span>
                        {moment(item?.occursOn)?.format("A")}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Calendar Event Type</p>
                      <p>{item?.typeNameEn}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p>Event Result</p>
                      <p>-</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p>Venue</p>
                      <p>-</p>
                    </div>

                    <p className="details-calender my-2">Details</p>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.descriptionEn,
                      }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default CalendarComp;
