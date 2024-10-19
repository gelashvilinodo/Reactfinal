import "./App.css";
import "./reset.css";
import User from "./components/User";

function App() {
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
