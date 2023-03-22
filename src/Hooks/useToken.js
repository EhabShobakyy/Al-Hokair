import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .post("https://data.argaam.com/authenticate", {
        username: "ALHOKAIR_GROUP",
        password: "T44S21-PK4A51C4CF78967C857BE8F-X0007F-4Z",
      })
      .then((res) => {
        // console.log(res.data.jwtToken);

        // Get
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${res.data.jwtToken}`,
            },
          })
          .then((res) => {
            setData(res.data);
            // console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
};

export default useToken;
