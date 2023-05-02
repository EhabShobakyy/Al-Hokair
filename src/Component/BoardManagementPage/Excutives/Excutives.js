import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Routing
import { Link } from "react-router-dom";
// Style
import "./Excutives.css";

function Excutives() {
  // Board Management Page Data
  const boardManagementData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`
  );
  const boardData = boardManagementData?.individuals;

  // varaible to filter chairman Member
  let excutivesMember = boardData?.slice(2)?.filter((item) => {
    return item?.companyPositionTypeNameEn === "Executive";
  });

  console.log(boardData);

  return (
    <div className="container-lg">
      <h3 className="my-4">Excutives</h3>
      <div className="excutives-member d-flex flex-wrap col-12 py-4">
        {excutivesMember?.map((item, id) => {
          return (
            <div className="person-container col-md-6 col-12" key={id}>
              <Link
                to={`/BoardManagementPage/Excutives/${item.individualID}`}
                key={id}
              >
                <div className="d-flex align-items-center justify-content-between">
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

export default Excutives;
