import React from "react";
// Token
import useToken from "../../../../Hooks/useToken";
// highcharts library
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Style
import "./CapitalChart.css";

function CapitalChart() {
  // Chart Data Component
  const capitalChart = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en`
  );
  var capitalChartData = capitalChart?.capitalChartData;

  console.log(capitalChartData);

  // Array to store chart data
  var dataArray = [];
  // Array to store Date
  var dateArray = [];
  // looping to get the last five years
  capitalChartData?.slice(10, capitalChartData.length - 1)?.map((data) => {
    return (
      <div>
        {dataArray.push(data?.Capital)}
        {dateArray.push(data?.FinancialYear)}
      </div>
    );
  });

  let dataChart = dataArray.reverse();

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
      <h3 className="py-1 my-3 capital-heading">Capital Chart</h3>
      <div className="capital-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default CapitalChart;
