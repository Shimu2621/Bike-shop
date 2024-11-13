import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Brands from "./components/Brands/Brands";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
