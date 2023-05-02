import React from "react";
// Historical Chart
import HistoricalChart from "./HistoricalChart/HistoricalChart";
// Historical Table
import DivindesHistory from "./DivindesHistory/DivindesHistory";
// Style
import "./HistoricalDivindes.css";

function HistoricalDivindes() {
  return (
    <div>
      <h3 className="py-1 my-3 capital-heading">Historical Divindes</h3>
      <HistoricalChart />
      <DivindesHistory />
    </div>
  );
}

export default HistoricalDivindes;
