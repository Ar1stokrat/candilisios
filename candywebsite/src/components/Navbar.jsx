import React from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Logotype" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Our Candy</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Candy Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
