import { Rate } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      axios
        .get(`http://localhost:5000/products/${id}`)
        .then((response) => {
          setProduct(response.data.data || response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchProduct(); // Call the function here
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Or a custom loading spinner/message
  }
  console.log(product);

  return (
    <div className="single_product">
      <div className="product_thumbnail">
        <img src={product.thumbnail} alt={`Product ${product.name}`} />
      </div>

      <div className="product_details">
        <div className="single_page_header">
          <h2>Product Details</h2>
        </div>
        <h1>{product?.name}</h1>
        <p className="price">Price: ${product.price}</p>
        <div className="rating">
          <Rate
            defaultValue={product.ratingCount}
            allowHalf
            count={5}
            allowClear={false}
            disabled
          />
        </div>
        <p>Category: {product.category}</p>
        <p>{product.featured ? "Featured Product" : "Regular Product"}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
