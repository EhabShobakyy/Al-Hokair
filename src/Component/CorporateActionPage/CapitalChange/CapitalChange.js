import React, { useState } from "react";
// Capital Chart Component
import CapitalChart from "./CapitalChangeChart/CapitalChart";
// Token
import useToken from "../../../Hooks/useToken";
// Format Date
import moment from "moment";
// Style
import "./CapitalChange.css";

function CapitalChange() {
  const [isShown, setIsShown] = useState(false);
  // Capital Data Page
  const capitalChart = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en`
  );
  var capitalChartData = capitalChart?.capitalChanges;

  console.log(capitalChartData);
  return (
    <div className="capital-change">
      <CapitalChart />
      {/* Capital Table Component */}
      <div className="capital-component">
        <h3 className="py-1 my-3 capital-heading">Capital Chnges</h3>
        <div className="capital-table">
          <div className="capital-container capital-heading d-flex justify-content-between">
            <p className="col-2 ">Date</p>
            <p className="col-1">Type</p>
            <div className=" d-flex justify-content-between col-5 text-center">
              <div className="before-sec col-6">
                <p> Before</p>
                <div className="d-flex justify-content-around">
                  <p>
                    Capital
                    <p>(M Riyal)</p>
                  </p>
                  <p>Shares (M)</p>
                </div>
              </div>
              <div className="executive-sec col-6">
                <p> Executives</p>
                <div className="d-flex justify-content-around">
                  <p>
                    Capital
                    <p>(M Riyal)</p>
                  </p>
                  <p>Shares (M)</p>
                </div>
              </div>
            </div>
            <p className="col-1">Change (%)</p>
            <p className="col-1">Notes</p>
            <p className="col-1">Link</p>
          </div>

          <div className="capital-container my-3 d-flex justify-content-between">
            <p className="col-2">
              {moment(capitalChartData?.dueDate).format("D/M/Y")}
            </p>
            <p className="col-1">IPO</p>
            <div className="d-flex justify-content-between col-5 text-center">
              <div className="col-6">
                <div className="d-flex justify-content-around">
                  <p>{capitalChartData?.currentCapital}</p>
                  <p>{capitalChartData?.currentShares}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-around">
                  <p>{capitalChartData?.newCapital}</p>
                  <p>{capitalChartData?.newShares}</p>
                </div>
              </div>
            </div>
            <p className="col-1">({capitalChartData?.bonusShares}%)</p>
            <p className="col-1 capital-notes">
              <i class="bi bi-journal-text"></i>

              <div className="note-content">{capitalChartData?.notesEn}</div>
            </p>
            <p className="col-1">
              <a href={capitalChartData?.linkEn}>
                <i class="bi bi-link-45deg"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapitalChange;
