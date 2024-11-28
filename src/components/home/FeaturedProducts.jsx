import React, { useEffect, useState } from "react";
// import products from "../../staticData/products";
import ProductCard from "./ProductCard";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://bike-shop-server-omega.vercel.app/products"
      );
      setProducts(response.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  // Limit products to 8
  const limitedProducts = products.slice(0, 8);

  return (
    <>
      {limitedProducts.length !== 0 ? (
        <div
          className="featured_product"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="home_section_title">Featured Products</h2>
          <p className="section_title_text">
            Revolutionize Your Commute with Our Latest Bikes!
          </p>

          <div className="product_card_container">
            {limitedProducts?.map((product, index) => (
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
