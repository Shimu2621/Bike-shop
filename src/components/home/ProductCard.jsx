import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="product_card">
      <Link to={`/product/${product?.id}`} className="product_img">
        <div>
          <img
            // className="product_thumbnail"
            src={product?.thumbnail}
            alt={`product ${product.name}`}
          />
        </div>
      </Link>

      <div>
        <h4 className="product_name">{product?.name}</h4>

        <div className="rating">
          <Rate
            style={{ color: "#FFD700" }}
            defaultValue={product?.ratingCount}
            allowHalf
            count={5}
            allowClear={false}
            disabled
          />
        </div>

        <div className="product_price">
          <div>
            {product.discount.value > 0 ? (
              <div>
                {product?.discount?.discountType === "flat" && (
                  <h2 className="price">
                    ${product?.price - product?.discount?.value}
                    <span className="old_price">${product?.price}</span>
                  </h2>
                )}
                {product?.discount?.discountType === "percent" && (
                  <h2 className="price">
                    $
                    {product?.price -
                      Math.floor(
                        product.price * (product?.discount?.value / 100)
                      )}
                    <span className="old_price">${product?.price}</span>
                  </h2>
                )}
              </div>
            ) : (
              <div>
                <h2 className="price">${product?.price}</h2>
              </div>
            )}
          </div>
          <Link to={`/product/${product?.id}`}>
            <button className="btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
