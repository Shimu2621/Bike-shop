import React from "react";
import HomeSlider from "../home/HomeSlider";
import BasicServices from "../home/BasicServices";
import FeaturedProducts from "../home/FeaturedProducts";
import TopCategories from "../home/TopCategories";
import Reviews from "../home/Reviews";
import TopBrands from "../home/TopBrands";
import ChooseUs from "../home/ChooseUs";

const Home = () => {
  return (
    <div className="main_container">
      <HomeSlider />
      <BasicServices />
      <FeaturedProducts />
      <ChooseUs />
      <TopCategories />
      <TopBrands />
      <Reviews />
    </div>
  );
};

export default Home;
