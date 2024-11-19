import React, { useEffect } from "react";
// import Masonry from "react-masonry-css";
import topCategories from "../../staticData/topCategories";
import Aos from "aos";
import "aos/dist/aos.css";

const OurGallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
  }, []);

  //   const breakpointColumnsObj = {
  //     default: 4, // Default to 4 columns for large screens
  //     1100: 3, // 3 columns for medium screens (1100px and below)
  //     700: 2, // 2 columns for tablets (768px and below)
  //     500: 1, // 1 column for mobile screens (500px and below)
  //   };

  return (
    <div className="gallery_page">
      <h1 data-aos="fade-up">Our Gallery</h1>
      <p data-aos="fade-up">
        Our Gallery Showcases Passion & Adventures Define Our Cycling Community!
      </p>
      <div className="gallery_grid">
        {topCategories.map((category) => (
          <div
            key={category.id}
            className="gallery_item"
            data-aos="fade-up"
            data-aos-delay={category.id * 100}
          >
            <img
              src={category.image}
              alt={`Gallery Item ${category.id}`}
              className="gallery_image"
              data-aos="zoom-in" // Zoom-in animation for images
              data-aos-duration="1200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
