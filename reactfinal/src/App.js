import "./App.css";
import "./reset.css";
import User from "./components/User";
import { useEffect } from "react";

const api_token = "9XQsmODpojl6n8RFeZA1723UJBhzv2A9";
const base_url = "http://localhost:8055/items/users";

function App() {
  useEffect(() => {
    fetch(base_url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log({ data }));
  });

  return (
    <div className="cv_container">
      <div className="left_column">
        <User />
      </div>
      <div className="right_column"></div>
    </div>
  );
}

export default App;
