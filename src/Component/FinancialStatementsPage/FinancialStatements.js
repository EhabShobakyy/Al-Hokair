import React, { useState } from "react";
// Token
import useToken from "../../Hooks/useToken";
// HighChart
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Modal
import Modal from "../../Component/GlobalComponent/Modal/Modal";
// chart image
import chartImg from "../../Assets/chartImg.png";
// Style
import "./FinancialStatements.css";

function FinancialStatementsCom() {
  const [periodTabs, setPeriodTabs] = useState("year"); // State to Store Year or TRAILLING
  const [chartPopup, setChartPopup] = useState([]); // State to Store Value of Chart
  const [chartName, setChartName] = useState([]); // State to Display Name
  const [currencyType, setCurrencyType] = useState("SAR"); // State to Store SAR OR USD Values
  const [chartYears, setChartYears] = useState(`forYear`);

  // Financial Ratios Page Data
  const financialStatements = useToken(
    `https://data.argaam.com/api/v1/json/ir-api/financial-statements/:lang?fiscalPeriodType=${periodTabs}`
  );

  const financialStatementsData = financialStatements?.tabs;

  console.log("financialStatements", financialStatements);

  // Format Number to remove sign
  const formatNum = (num) =>
    num === "-" ? null : Number(num)?.toFixed(2).replace("-", "");
  // Format Number
  const formatNumChart = (num) =>
    num === "-" ? null : Number(num)?.toFixed(2);

  // Function to handle chart popup
  const handelChart = (e, id) => {
    // To Store Value of Row in the State
    setChartPopup(
      financialStatementsData[id]?.fields[e]?.values
        ?.slice(0, 5)
        ?.map((item) => Number(formatNumChart(item.value)))
    );
    // To Display Heading Name of the Row in Popup
    setChartName(financialStatementsData[id]?.fields[e]?.nameEn);
  };

  // Function to Display Year Row in Table
  const changeYear = () => {
    var yearsTable;
    // loop to Solve Error of Return Null
    for (var n in financialStatementsData) {
      var personInfo = financialStatementsData[n];
      yearsTable = personInfo?.fields[n]?.values
        ?.slice(0, 5)
        ?.map((years, id) => <th key={id}> {years?.[`${chartYears}`]}</th>);
      return yearsTable;
    }
  };

  // Array to get the last five years
  var years = [];

  const yearOptions = () => {
    // For loop to solve proplem of access first Index in array
    for (var n in financialStatementsData) {
      var personInfo = financialStatementsData[n];
      years = personInfo?.fields[n]?.values
        ?.slice(0, 5)
        ?.map((year) => year?.[`${chartYears}`]);
      return years;
    }
  };

  // Chart Customization
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: yearOptions(),
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Extra",
        data: chartPopup,
      },
    ],
    accessibility: {
      enabled: false,
    },
  };

  // Function to replace Between Annual & TRAILING
  const handelActive = (e) => {
    // To Add class to chart button
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
    setPeriodTabs(e?.target?.value);

    e?.target?.value === "quarter"
      ? setChartYears("forDate")
      : setChartYears("forYear");
  };

  // Function to Handle Active between SAR & USD
  const currencyActive = (e) => {
    var elems = document.querySelectorAll(".active-currency");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active-currency");
    });
    e.target.className = "active-currency";
    setCurrencyType(e.target.value);
  };

  // Function to Convert From USD & Riyal
  const currencyChange = (num, child) => {
    // Condetion to check if row is SharesOutstandings1 or Not
    if (currencyType === "USD" && child.ratioName != "SharesOutstandings1") {
      if (isNaN(num)) return "";
      else return formatNum(num / 3.75);
    } else return formatNum(num);
  };

  return (
    <>
      <div className="financial-ratios">
        <div className="container-lg my-4">
          <h3>Financial Statements</h3>
          <div className="financial-tabs d-flex justify-content-between  my-4">
            <div className="period-btn d-flex ">
              <button className="active" value="year" onClick={handelActive}>
                Annual
              </button>
              <button value="quarter" onClick={handelActive}>
                Quarter
              </button>
            </div>

            <div className="currency-tabs d-flex">
              <button
                className="active-currency"
                value="SAR"
                onClick={currencyActive}
              >
                SAR
              </button>
              <button value="USD" onClick={currencyActive}>
                USD
              </button>
            </div>
          </div>

          <table className="financial-ratios-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                {changeYear()}
              </tr>
              <tr>
                <th style={{ textAlign: "left" }}>Details</th>
                <th></th>
                {/* {yearPdfAr()} */}
                {financialStatements?.companyFinancialResults
                  ?.slice(0, 5)
                  ?.map((pdf) => (
                    <th>
                      <i class="bi bi-file-earmark-pdf-fill"></i>

                      {pdf?.fileURLAr != null && (
                        <a
                          className="pdf-icon"
                          target="_blank"
                          href={pdf?.fileURLAr}
                        >
                          AR
                        </a>
                      )}

                      {pdf?.fileURLEn != null && (
                        <a
                          className="pdf-icon"
                          target="_blank"
                          href={pdf?.fileURLEn}
                        >
                          EN
                        </a>
                      )}
                    </th>
                  ))}
              </tr>
            </thead>
            {financialStatementsData?.map((item, id) => {
              return (
                <tbody key={id} className="accordion" id={`${id}`}>
                  <tr className="accordion-item">
                    <th id={id} colSpan="12" style={{ textAlign: "left" }}>
                      <button
                        className="accordion-button close-sign"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${id}`}
                        aria-expanded="true"
                        aria-controls={`collapse${id}`}
                      ></button>
                      {item?.tabNameEn}
                    </th>
                  </tr>
                  {item?.fields?.map((child, idx) => {
                    return (
                      <tr
                        key={idx}
                        className={`data-${id}  accordion-body accordion-collapse collapse show`}
                        id={`collapse${id}`}
                        aria-labelledby={`${id}`}
                        data-bs-parent
                      >
                        <td style={{ textAlign: "left" }}>
                          {child?.displayNameEn}
                        </td>
                        <td>
                          <button
                            className="chart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#financialStatementsModal"
                          >
                            <img
                              className="chart-img"
                              src={chartImg}
                              alt="Chart Image"
                              onClick={() => handelChart(idx, `${id}`)}
                            />
                          </button>
                        </td>
                        <td>
                          <p
                            style={{
                              color:
                                child?.values[0]?.value < 0 ? "red" : "green",
                            }}
                          >
                            {currencyChange(child?.values[0]?.value, child)}
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              color:
                                child?.values[1]?.value < 0 ? "red" : "green",
                            }}
                          >
                            {currencyChange(child?.values[1]?.value, child)}
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              color:
                                child?.values[2]?.value < 0 ? "red" : "green",
                            }}
                          >
                            {currencyChange(child?.values[2]?.value, child)}
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              color:
                                child?.values[3]?.value < 0 ? "red" : "green",
                            }}
                          >
                            {currencyChange(child?.values[3]?.value, child)}
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              color:
                                child?.values[4]?.value < 0 ? "red" : "green",
                            }}
                          >
                            {currencyChange(child?.values[4]?.value, child)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      {/* Chart Popup  */}
      <Modal id={"financialStatementsModal"} name={chartName}>
        <>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </>
      </Modal>
    </>
  );
}

export default FinancialStatementsCom;
