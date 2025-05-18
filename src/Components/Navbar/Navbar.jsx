import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const [hr, setHr] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
          alt=""
        />
      </div>
      <div className="nav-links">
        <ul className="nav-links-list">
          <li
            onMouseEnter={() => {
              setHr("home");
            }}
            onMouseLeave={() => {
              setHr("");
            }}
          >
            Home{hr === "home" ? <hr /> : <></>}
          </li>
          <li
            onMouseEnter={() => {
              setHr("men");
            }}
            onMouseLeave={() => {
              setHr("");
            }}
          >
            <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
              Men
            </Link>
            {hr === "men" ? <hr /> : <></>}
          </li>
          <li
            onMouseEnter={() => {
              setHr("women");
            }}
            onMouseLeave={() => {
              setHr("");
            }}
          >
            <Link
              to="/women"
              style={{ textDecoration: "none", color: "black" }}
            >
              Women
            </Link>
            {hr === "women" ? <hr /> : <></>}
          </li>
          <li
            onMouseEnter={() => {
              setHr("kids");
            }}
            onMouseLeave={() => {
              setHr("");
            }}
          >
            Kids{hr === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        {showSearch && <input type="search" placeholder="Search..." />}
        <IoSearch id="nav-icon" onClick={handleToggle} />
        <FaRegHeart id="nav-icon" />
        <AiOutlineShoppingCart id="nav-icon" />
        <span id="cart-count">5</span>
        <CgProfile id="nav-icon" />
      </div>
    </div>
  );
};

export default Navbar;
