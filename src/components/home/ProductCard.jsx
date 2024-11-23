import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="product_card main-container">
      <Link to={`/product/${product?._id}`} className="product_img">
        <div className="product_image_wrapper">
          <img
            src={product?.thumbnail}
            alt={`product ${product.name}`}
            className="product_image"
          />
        </div>
      </Link>

      <div className="product_info">
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

        <div className="product_details">
          <h4 className="product_category">{product?.category}</h4>
          <h4 className="product_featured">{product?.featured}</h4>
          <h2 className="price">${product?.price.toFixed(2)}</h2>
        </div>
        <Link to={`/products/${product?._id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
