import React from "react";
import useToken from "../Hooks/useToken";

const Overview = () => {
  const overview = useToken(
    "https://data.argaam.com/api/v1.0/json/ir-api/overview/en"
  );

  const events = overview;

  console.log(events);

  return (
    <div className="container-lg py-5">
      <h3>Company Overview</h3>
      <p>
        Alhokair group is a name that has been tied the world of hospitality and
        entertainment for decades. To many, it has become the first name that
        comes to mind when tourism in Saudi Arabia or the Arabian world are
        mentioned. The group was started in 1975 to invest in the sectors of
        entertainment and hospitality under the leadership of Sheikh Abdulmohsin
        Alhokair. Over five decades, the group’s projects expanded to include 92
        entertainment centers and35 hotels spread in Saudi Arabia and United
        Arab Emirates.
      </p>
      <p>
        The group continues to develop its tourism investments to deliver the
        best of what top global companies offer by attracting expertise and
        establishing partnerships that enhance returns of investment and makes a
        difference in the fields of entertainment and hospitality.{" "}
      </p>
    </div>
  );
};

export default Overview;
