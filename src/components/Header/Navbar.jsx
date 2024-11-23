import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Icons
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
//external imports
import { Dropdown } from "antd";

const Navbar = () => {
  const [user, setUser] = useState();

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
  }, [user]);
  // console.log(user);

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
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/">
                <RiShoppingBagLine size={23} />
              </Link>
            </li>
            {user && user.imageUrl ? (
              <div>
                <img src={user.imageUrl} alt={user.fullName} />
                <h4>{user.fullName}</h4>
                <button className="btn" onClick={handleLogOut}>
                  Log Out
                </button>
              </div>
            ) : (
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
