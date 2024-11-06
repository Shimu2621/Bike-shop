import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
