import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Routing
import { Link } from "react-router-dom";
// Style
import "./Board.css";
function Board() {
  // Board Management Page Data
  const boardManagementData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`
  );
  const boardData = boardManagementData?.individuals;

  // varaible to filter chairman Member
  let chairmanMember = boardData?.filter((item) => {
    return item?.positionNameEn === "Chairman of the Board";
  });

  // varaible to filter Board Members
  let boardMember = boardData?.filter((item) => {
    return (
      item?.positionNameEn === "Board Member" ||
      item?.positionNameEn === "Vice Chairman"
    );
  });

  return (
    <div className="container-lg">
      <h3 className="my-3">Board & Management</h3>
      {/* Chairman Members */}
      <div className="chairman py-4 col-12">
        {chairmanMember?.map((item, id) => {
          return (
            <div className="person-container col-md-6 col-12" key={id}>
              <Link
                to={`/BoardManagementPage/Board/${item?.individualID}`}
                key={id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      className="global-person-img "
                      src={item?.profilePicURL}
                      alt="Personal Details"
                    />
                  </div>
                  <div className="personal-info col-md-8 col-9">
                    <p className="personal-name">{item?.nameEn}</p>
                    <p>{item?.positionNameEn}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Board Members */}
      <div className="board-member d-flex flex-wrap col-12 py-4">
        {boardMember?.map((item, id) => {
          return (
            <div className="person-container col-md-6 col-12" key={id}>
              <Link
                to={`/BoardManagementPage/Board/${item?.individualID}`}
                key={id}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      className="global-person-img"
                      src={item?.profilePicURL}
                      alt="Personal Details"
                    />
                  </div>
                  <div className="personal-info col-md-8 col-9">
                    <p className="personal-name">{item?.nameEn}</p>
                    <p>{item?.positionNameEn}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
