import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Icons
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
//external imports
import { Dropdown } from "antd";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState();
  const [cartCount, setCartCount] = useState(0); //stores the number of items in the user's cart.

  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem("user");

    // Check if the item exists in local storage
    if (itemFromLocalStorage) {
      // Parse the retrieved item
      const parsedItem = JSON.parse(itemFromLocalStorage);

      // Now you can use the parsed item as a JavaScript object
      setUser(parsedItem);
    } else {
      console.log("Item not found in local storage");
    }
  }, []);
  // console.log(user);

  useEffect(() => {
    // Fetch cart count if user is logged in
    const fetchCartCount = async () => {
      //If the user is logged in, it triggers an API call  to fetch the number of items in the user's cart.
      if (user?.email) {
        try {
          const response = await axios.get(
            `https://bike-shop-server-omega.vercel.app/order-list?email=${user?.email}`
          ); // it fetches the user's cart items based on their email
          setCartCount(response.data.data.length); // Set the cart item count
        } catch (error) {
          console.error("Error fetching cart count:", error);
        }
      }
    };
    fetchCartCount();
  }, [user?.email]);
  console.log(cartCount);

  //  handleLogOut function clears the user data from localStorage and resets the user state, logging the user out
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "1",
    },
    {
      label: <Link to="/products">products</Link>,
      key: "2",
    },
    {
      label: <Link to="/contact-us">Contact Us</Link>,
      key: "3",
    },
    {
      label: <Link to="/about-us">About Us</Link>,
      key: "4",
    },
    {
      label: <Link to="/services">services</Link>,
      key: "5",
    },
  ];

  return (
    <nav className="main_navbar">
      <div className="main_container">
        <div className="navbar_container">
          <Link to="/" className="navbar_logo">
            <img
              src="images/bike-logo.png"
              width={150}
              height={150}
              alt="bicycle-logo"
            />
          </Link>

          <div className="search_wrapper">
            <div className="input_wrapper">
              <input placeholder="search for..."></input>
              <i className="search_icon">
                <CiSearch size={25} />
              </i>
            </div>
          </div>

          <div className="navbar_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            {/* Dashboard link */}
            {user && user.role === "admin" ? (
              <li>
                <Link to="/admin-dashboard">Dashboard</Link>
              </li>
            ) : (
              " "
            )}
            {/* Cart icon link */}
            {/* If there are items in the cart, it shows the count next to the icon */}
            <li className="cart_icon">
              <Link to="/cart">
                <RiShoppingBagLine size={23} />
                {cartCount > 0 && (
                  <span className="cart_count">{cartCount}</span>
                )}
              </Link>
            </li>
            {/* User link */}
            {/* If the user is logged in, it displays the user's profile picture and name along with a "Log Out" button */}
            {user && user.imageUrl ? (
              <div className="user">
                <div className="user_info">
                  <img
                    className="user_img"
                    src={user.imageUrl}
                    alt={user.fullName}
                  />
                  <h4 className="user_name">{user.fullName}</h4>
                </div>
                <button className="btn" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            ) : (
              // If the user is not logged in, it shows a "Sign Up"
              <li>
                <Link to="/signup">
                  <FaRegUser size={20} />
                </Link>
              </li>
            )}
          </div>

          <Dropdown
            trigger={["click"]}
            className="nav_menu_dropdown_button"
            overlayClassName={"nav_menu_dropdown"}
            menu={{ items }}
          >
            <span onClick={(e) => e.preventDefault()}>
              <HiMiniBars3CenterLeft size={28} color="brown" />
            </span>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
