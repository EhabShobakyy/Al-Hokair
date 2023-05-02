import React, { useEffect, useState } from "react";
// Token
import useToken from "../../../Hooks/useToken";
// React Taps
import "react-tabs/style/react-tabs.css";
// Style
import "./Salaries.css";

function Salaries() {
  const [firstIndex, setFirstIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(2);

  // Board Management Page Salaries Data
  const boardManagementData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`
  );
  // Function to format Numbers
  const formatNum = (num) => {
    let number = Math.abs(num).toFixed(2);
    if (number === "0.00") {
      return "-";
    } else return number;
  };
  const salariesData = boardManagementData?.salaries;

  const handleYear = (e) => {
    console.log(e.target);

    // Looping to get all years btn and remove active class
    var elems = document.querySelectorAll(".active-years");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active-years");
    });
    // Add active class
    e.target.className = "years-btn active-years";

    if (e.target.innerHTML === "2023") {
      setFirstIndex(0);
      setLastIndex(1);
    } else if (e.target.innerHTML === "2022") {
      setFirstIndex(1);
      setLastIndex(2);
    } else if (e.target.innerHTML === "2021") {
      setFirstIndex(2);
      setLastIndex(3);
    } else if (e.target.innerHTML === "2020") {
      setFirstIndex(3);
      setLastIndex(4);
    } else if (e.target.innerHTML === "2019") {
      setFirstIndex(4);
      setLastIndex(5);
    }
  };

  console.log(salariesData);

  return (
    <div className="container-lg">
      <h3 className="my-3">Salaries & Bonueses</h3>

      {salariesData?.map((item, id) => {
        return (
          <button
            className={`years-btn ${id === 1 ? "active-years" : ""}`}
            onClick={handleYear}
          >
            {item?.year}
          </button>
        );
      })}

      <table className="table-salaries my-3">
        <thead>
          <tr>
            <th>Details</th>
            <th>Board Members</th>
            <th>Executives</th>
            <th>Total</th>
          </tr>
        </thead>

        {salariesData?.slice(firstIndex, lastIndex)?.map((item) => {
          return (
            <tbody>
              <tr>
                <td>Salaries (SAR mn)</td>
                <td>{formatNum(item?.boardMembersRenumerations?.salaries)}</td>
                <td>{formatNum(item?.executivesRenumerations?.salaries)}</td>
                <td>{formatNum(item?.totalsRenumerations?.salaries)}</td>
              </tr>
              <tr>
                <td>Bonueses (SAR mn)</td>
                <td>{formatNum(item?.boardMembersRenumerations?.bonuses)}</td>
                <td>{formatNum(item?.executivesRenumerations?.bonuses)}</td>
                <td>{formatNum(item?.totalsRenumerations?.bonuses)}</td>
              </tr>
              <tr>
                <td>Other Benfits (SAR mn)</td>
                <td>
                  {formatNum(item?.boardMembersRenumerations?.otherRewards)}
                </td>
                <td>
                  {formatNum(item?.executivesRenumerations?.otherRewards)}
                </td>
                <td>{formatNum(item?.totalsRenumerations?.otherRewards)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{formatNum(item?.boardMembersRenumerations?.total)}</td>
                <td>{formatNum(item?.executivesRenumerations?.total)}</td>
                <td>{formatNum(item?.totalsRenumerations?.total)}</td>
              </tr>
              <tr>
                <th>Notes</th>
                <td>-</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Salaries;
