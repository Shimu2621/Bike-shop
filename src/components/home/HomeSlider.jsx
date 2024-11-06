import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import sliders from "../../staticData/slider";

import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <div className="home_slider main_container">
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
                <button>{slider?.button}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
