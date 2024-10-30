import "./App.css";
import "./reset.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="cv_container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
