import React from "react";
// Token
import useToken from "../../../../Hooks/useToken";
// highcharts library
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Style
import "./HistoricalChart.css";

function HistoricalChart() {
  // Historical Data
  const historicaDividenlData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en`
  );
  var historicalData = historicaDividenlData?.dividendPerShareChartData;
  // console.log(historicalData);

  // Array to store chart data
  var dataArray = [];
  // Array to store Date
  var dateArray = [];
  // looping to get the last five years
  historicalData?.slice(1)?.map((data) => {
    return (
      <div>
        {dataArray.push(data?.SharesOutstanding)}
        {dateArray.push(data?.FinancialYear)}
      </div>
    );
  });

  // To get year start from 2022
  let dataChart = dataArray.reverse();
  // Chart Option
  const options = {
    type: "column",
    title: {
      text: "",
    },
    xAxis: {
      title: {},

      categories: dateArray.reverse(),
    },
    yAxis: {
      title: true,
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: "",
        data: dataChart,
        color: "#0068b3",
      },
    ],
  };

  return (
    <div>
      <div className="capital-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default HistoricalChart;
