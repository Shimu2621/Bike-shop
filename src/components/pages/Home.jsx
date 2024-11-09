import React from "react";
import HomeSlider from "../home/HomeSlider";
import BasicServices from "../home/BasicServices";
import FeaturedProducts from "../home/FeaturedProducts";
import TopCategories from "../home/TopCategories";

const Home = () => {
  return (
    <div className="main_container">
      <HomeSlider />
      <BasicServices />
      <TopCategories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
