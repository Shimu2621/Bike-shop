import React from "react";
import { Link } from "react-router-dom";
//Icons
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
//external imports
import { Dropdown } from "antd";

const Navbar = () => {
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "1",
    },
    {
      label: <Link to="/brands">Brands</Link>,
      key: "2",
    },
    {
      label: <Link to="/contact">Contact</Link>,
      key: "3",
    },
    {
      label: <Link to="/reviews">Reviews</Link>,
      key: "4",
    },
    {
      label: <Link href="/services">services</Link>,
      key: "5",
    },
  ];

  return (
    <nav className="main_navbar">
      <div className="main_container">
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
            <Link to="/brands">Brands</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services">services</Link>
          </li>

          <button className="nav_button">
            <FaRegUser size={20} />
          </button>
          <button className="nav_button">
            <RiShoppingBagLine size={23} />
          </button>
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
    </nav>
  );
};

export default Navbar;
