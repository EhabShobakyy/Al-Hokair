import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Format Date
import moment from "moment";
// Style
import "./RecentChange.css";

function RecentChange() {
  const recentChange = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en`
  );
  var recentChangeData = recentChange?.capitalChanges;
  console.log(recentChangeData);

  return (
    <div className="recent-change">
      <h3 className="py-1 my-3">Recent Change</h3>
      <div className="recent-content d-flex justify-content-between">
        <p>Previous Capital</p>
        <p>{recentChangeData?.currentCapital.toFixed(2)}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p>Previous No. of Shares (M)</p>
        <p>{recentChangeData?.currentShares.toFixed(2)}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p>Capital Change</p>
        <p>{recentChangeData?.bonusShares.toFixed(2)}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p> Current Capital (M SAR) </p>
        <p>{recentChangeData?.newCapital.toFixed(2)}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p> Current No. of Shares (M) (M)</p>
        <p>{recentChangeData?.newShares.toFixed(2)}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p>Type </p>
        <p>{recentChangeData?.companyCapitalStatusNameEn}</p>
      </div>

      <div className="recent-content d-flex justify-content-between">
        <p>Announcement </p>
        <p>{moment(recentChangeData?.announcedDate).format("D/M/Y")}</p>
      </div>
    </div>
  );
}

export default RecentChange;
