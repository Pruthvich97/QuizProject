import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Qs.css";
function Qs() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/userDetails")
      .then((res) => {
        setuserData(res.data);
        console.log("res user", res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterobj = userData.filter((item) => item.score);
  console.log(filterobj);
  return (
    <div className="ResultMainContainer">
      <h1 className="result">Details of candidates</h1>
      <div className="ResultContainer">
        {filterobj.map((item) => (
          <div className="ResultCardContainer">
            <h2 className="details">
              Language: <span className="detaistext">{item.langName}</span>
            </h2>
            <h3 className="details">
              Name: <span className="detaistext">{item.adminname}</span>
            </h3>
            <p className="details">
              Email: <span className="detaistext">{item.adminemail}</span>
            </p>
            <p className="details">
              PhoneNumber:{" "}
              <span className="detaistext">{item.phonenumber}</span>
            </p>
            <p className="details">
              Score: <span className="detaistext">{item.score}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qs;