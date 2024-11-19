import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import sliders from "../../staticData/slider";

import "swiper/css";
import "swiper/css/pagination";

// import Aos from "aos";
// import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);
  return (
    <div className="home_slider">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Pagination, Autoplay, FreeMode]}
        freeMode={true}
        className="mySwiper"
      >
        {sliders?.map((slider) => {
          return (
            <SwiperSlide key={slider?.id} className="slider_slide">
              <img
                src={slider?.image}
                alt={`Slide ${slider.id}`}
                className="slider_image"
              />
              <div className="slider_text">
                <h2>{slider?.title}</h2>
                <p>{slider?.text}</p>
                <Link to="/brands">
                  <button>{slider?.button}</button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
