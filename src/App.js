import "./styles.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
