import React, { useEffect } from "react";
import reviews from "../../staticData/reviews";
import quote from "../../../public/images/quote.png";
import quotes from "../../../public/images/quotes.png";
import choose from "../../../public/images/choose.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Aos from "aos";
import "aos/dist/aos.css";
import { Rate } from "antd";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="reviews main_container" data-aos="fade-up">
      <div className="reviews_section">
        <div
          className="reviews_title"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <img width={50} height={50} src={choose} alt="choose" />
          <h4 className="title">TESTIMONIALS</h4>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="400">
          See What They Said About Us
        </h1>
        <p data-aos="fade-up" data-aos-delay="600">
          We are very pleased to hear that our customers are satisfied with our
          services. We believe every customer should feel welcome and
          comfortable in our shops. Below are a few emails we have received from
          happy customers.
        </p>
      </div>

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
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={0}
        className="mySwiper"
      >
        {reviews?.map((review, index) => {
          return (
            <SwiperSlide
              key={review?.id}
              // data-aos="fade-up"
              // data-aos-delay={index * 150}
            >
              <div className="review_card">
                <div className="review_img">
                  <img
                    width={120}
                    height={120}
                    src={review?.image}
                    alt={review?.name}
                    data-aos="flip-right"
                  />
                </div>
                <h3 className="name" data-aos="fade-up">
                  {review?.name}
                </h3>

                <div className="rating">
                  <Rate
                    style={{ color: "#FFD700" }}
                    defaultValue={review?.rating}
                    allowHalf
                    count={5}
                    allowClear={false}
                    disabled
                  />
                </div>
                <div
                  className="review_text"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img
                    className="left"
                    height={25}
                    width={25}
                    src={quotes}
                    alt={quotes}
                    data-aos="fade-right"
                  />

                  <p>{review?.review}</p>

                  <img
                    className="right"
                    height={25}
                    width={25}
                    src={quote}
                    alt={quote}
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
