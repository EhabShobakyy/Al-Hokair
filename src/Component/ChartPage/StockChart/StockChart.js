import React, { useState } from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Style
import "./StockChart.css";
// Format Date
import moment from "moment";
// HighChart
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function StockChart() {
  // Chart Data
  const StockChart = useToken(
    "https://data.argaam.com/api/v1.0/json/ir-api/charts-data/0/5Y"
  );

  const [chartType, setChartType] = useState("line");

  // variable contain chart data
  const chart = StockChart?.data;
  console.log(chart);

  // function to get type of chart
  const selectType = (e) => {
    console.log(e.target.value);
    setChartType(e.target.value);
  };

  var data = chart;
  var ohlc = [],
    volume = [],
    dataLength = data?.length,
    groupingUnits = [
      [
        "week", // unit name
        [1], // allowed multiples
      ],
      ["month", [1, 2, 3, 4, 6]],
    ],
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      new Date(String(data[i]["date"].replace(" ", "T"))).getTime(), // the date
      data[i]["open"], // open
      data[i]["high"], // high
      data[i]["low"], // low
      data[i]["close"], // close
    ]);

    volume.push([
      new Date(String(data[i]["date"].replace(" ", "T"))).getTime(), // the date
      data[i]["volume"], // the volume
    ]);
  }

  const options = {
    rangeSelector: {
      selected: 0,
      inputEnabled: false,
    },

    title: {
      text: "ALHOKAIR GROUP",
      align: "left",
      style: {
        fontWeight: "bold",
      },
    },

    yAxis: [
      {
        labels: {
          align: "left",
          x: 3,
        },
        title: {
          // text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "left",
          x: 3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },
    legend: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    navigator: { enabled: false },
    rangeSelector: {
      enabled: true,
    },
    tooltip: {
      shape: "square",
      headerShape: "callout",
      borderWidth: 0,
      shadow: false,
      positioner: function (width, height, point) {
        var chart = this.chart,
          position;

        if (point.isHeader) {
          position = {
            x: Math.max(
              // Left side limit
              chart.plotLeft,
              Math.min(
                point.plotX + chart.plotLeft - width / 2,
                // Right side limit
                chart.chartWidth - width - chart.marginRight
              )
            ),
            y: point.plotY,
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop,
          };
        }

        return position;
      },
    },
    series: [
      {
        type: `${chartType}`,
        name: "AAPL",
        data: ohlc,
        color: "#0068b3",
        dataGrouping: {
          units: groupingUnits,
        },
      },
      {
        type: "column",
        name: "Volume",
        color: "#0068b3",
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits,
        },
      },
    ],
    rangeSelector: {
      selected: 0,
      inputEnabled: false,
    },
  };

  return (
    <div className="container-lg">
      <div className="chart-options container-lg ">
        <select className="chart-type" onChange={selectType}>
          <option value="line">Line</option>
          <option value="area">Area</option>
          <option value="ohlc">OHLC</option>
          <option value="spline">Spline</option>
          <option value="areaspline">Area Spline</option>
        </select>
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export default StockChart;
