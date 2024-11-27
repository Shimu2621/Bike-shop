import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductInventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.data.deletedCount === 1) {
          setProducts((prevItem) => prevItem.filter((item) => item._id !== id));
          toast.success("product deleted successfully");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-inventory">
      <h2>Product Inventory</h2>
      <h4>Total Product: {products.length}</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Rating Count</th>
            <th>Category</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  width="100"
                  height="100"
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.ratingCount}</td>
              <td>{product.category}</td>
              <td>{product.featured ? "Yes" : "No"}</td>
              <td>
                <Link to={`/update-product/${product._id}`}>
                  {" "}
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInventory;
