import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Format Date
import moment from "moment";
// Style
import "./AnalystEstimates.css";

function AnalystEstimates() {
  // Disclosure Data
  const disclosure = useToken(
    "https://data.argaam.com/api/v1.0/json/ir-api/overview/en"
  );
  const analystEstimatesData = disclosure?.analystEstimates;

  console.log("Analyst Estimates", analystEstimatesData);

  return (
    <>
      <h6>Analyst Estimates</h6>
      <div className="analyst-container">
        {analystEstimatesData?.slice(0, 5)?.map((item) => {
          return (
            <>
              <div className="d-flex flex-wrap py-1">
                <p className="col-12 col-md-2">
                  {moment(item?.publishedOn, "DD-MM-YYYY")?.format(
                    "DD/MM/YYYY"
                  )}
                </p>
                <p className="col-12 col-md-10">{item?.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AnalystEstimates;
