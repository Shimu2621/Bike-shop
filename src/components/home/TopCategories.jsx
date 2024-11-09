import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import topCategories from "../../staticData/topCategories";
import Aos from "aos";
import "aos/dist/aos.css";

const TopCategories = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="top_categories main_container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="home_section_title">Top Categories</h1>
      <p className="section_title_text">
        We created the most advanced bicycle technology
      </p>
      <Swiper
        data-aos="zoom-in"
        data-aos-duration="1300"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20} // Adds space between slides for better alignment
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ height: "auto" }}
        className="mySwiper"
      >
        {topCategories?.length > 0 &&
          topCategories?.map((topCategory) => (
            <SwiperSlide key={topCategory?.id} className="swiper_slide">
              <img
                width={180}
                height={180}
                src={topCategory?.image}
                alt="category-img"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopCategories;
