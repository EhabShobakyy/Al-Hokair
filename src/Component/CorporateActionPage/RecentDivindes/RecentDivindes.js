import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Format Date
import moment from "moment";

function RecentDivindes() {
  const recentChange = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-widget/recent-dividends`
  );
  console.log(recentChange);

  return <h3 className="py-1 my-3">Dividends Change</h3>;
}

export default RecentDivindes;
