import React from "react";
// Token
import useToken from "../../../../Hooks/useToken";
// Format Date
import moment from "moment";
// Style
import "./DivindesHistory.css";

function DivindesHistory() {
  const historicaDividenlData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en`
  );
  var historicalTableData = historicaDividenlData?.capitalDividendHistory;
  console.log("historicalTableData", historicalTableData);

  return (
    <div className="my-4">
      <h3 className="py-1 my-3 capital-heading">Divindes History</h3>

      <div className="hitorical-table">
        <table>
          <thead>
            <tr>
              <th>Announcement</th>
              <th>Ex-Dividend</th>
              <th>Payment</th>
              <th>Dividends (M Riyal)</th>
              <th>Dividend</th>
              <th>Notes</th>
            </tr>
          </thead>

          {historicalTableData?.map((item, idx) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      {moment(item?.dividendAnnouncedDate).format("D/M/Y")}
                    </td>
                    <td>{moment(item?.dividendDate).format("D/M/Y")}</td>
                    <td>{moment(item?.dividendDueDate).format("D/M/Y")}</td>
                    <td>{item?.cashDividend}</td>
                    <td>{item?.cashDividendPerShare.toFixed(2)}</td>
                    <td>
                      <p className="icont-test">
                        <i class={`bi bi-journal-text `}></i>
                        <p className="test">{item?.notesEn}</p>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default DivindesHistory;
