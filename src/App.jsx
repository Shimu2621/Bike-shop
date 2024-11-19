import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import ServicePage from "./components/pages/ServicePage";
import ProductPage from "./components/pages/ProductPage";
import ContactUs from "./components/pages/ContactUs";
import Signup from "./components/pages/Signup";
import Signin from "./components/auth/Signin";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/servicePage" element={<ServicePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
