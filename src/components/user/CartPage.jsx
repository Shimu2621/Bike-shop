import axios from "axios";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userEmail, setUserEmail] = useState(""); // Example email
  const [loading, setLoading] = useState(true); // To manage loading state

  // Fetch user email from localStorage on initial render
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  useEffect(() => {
    // Fetch cart items only after the userEmail is set
    if (userEmail) {
      const fetchCartItems = async () => {
        try {
          const response = await axios.get(
            `https://bike-shop-server-omega.vercel.app/order-list?email=${userEmail}`
          );
          setCartItems(response.data.data);
          setLoading(false); // Stop loading once cart items are fetched
        } catch (error) {
          console.error("Error fetching cart items:", error);
          setLoading(false); // Stop loading in case of error
        }
      };
      fetchCartItems();
    }
  }, [userEmail]); // Only run when userEmail changes

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRemoveFromCart = (id) => {
    axios
      .delete(`https://bike-shop-server-omega.vercel.app/order-list/${id}`)
      .then((response) => {
        console.log(response);
        // Optionally, re-fetch cart items or update the state to reflect the change
        setCartItems(cartItems.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart_page">
      <div className="cart_container">
        <div className="cart_details">
          <h2 className="cart_title">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={`${item.productId}-${index}`}>
                {" "}
                {/* Unique key */}
                <img
                  width={100}
                  height={100}
                  src={item?.thumbnail}
                  alt={item?.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item?.name}</h3>
                  <p className="cart-item-price">Price: ${item?.price}</p>
                </div>
                <button
                  className="delete-button rounded"
                  onClick={() => handleRemoveFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="order_summary">
          <h2 className="order_title">Order Details</h2>
          <p className="order_total">Total Price: ${totalAmount.toFixed(2)}</p>
          <button className="checkout_btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
