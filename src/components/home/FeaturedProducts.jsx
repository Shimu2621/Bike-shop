import React, { useEffect } from "react";
import products from "../../staticData/products";
import ProductCard from "./ProductCard";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {products.length !== 0 ? (
        <div
          className="featured_product main_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="home_section_title">Featured Products</h2>
          <p className="section_title_text">
            Revolutionize Your Commute with Our Latest Bikes!
          </p>

          <div className="product_card_container">
            {products?.map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`} // Use `index` for a staggered effect
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FeaturedProducts;
