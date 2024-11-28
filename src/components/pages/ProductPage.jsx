import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import ProductCard from "../home/ProductCard";
import axios from "axios";

const ProductPage = () => {
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
  // const limitedProducts = products.slice(0, 8);

  return (
    <>
      {products.length !== 0 ? (
        <div
          className="featured_product main_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="home_section_title">Our Product Collection</h2>
          <p className="section_title_text">
            Each of us has our own challenges, goals and reasons to ride.
            <br />
            Our products are here to help you achieve your goals!
          </p>

          <div className="product_card_container">
            {products?.map((product, index) => (
              <div
                key={product._id}
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

export default ProductPage;
