import React from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Style
import "./BoardDirectors.css";
function BoardDirectors() {
  // Board Management Page Data
  const boardManagementData = useToken(
    `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`
  );
  // const boardData = boardManagementData?.individuals;

  console.log(boardManagementData);

  return (
    <div className="container-lg">
      <h3 className="my-3">Board of Directors</h3>
    </div>
  );
}

export default BoardDirectors;
