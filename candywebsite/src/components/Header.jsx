import React from 'react';
import "../assets/styles/Header.css";
import iconOrder from "../assets/images/icon-order.png";
import iconShop from "../assets/images/icon-shop.png";

const Header = () => {
  return(
    <header className="topbar">
      <div className="topbar-content">
        <a href="#">
          <img src={iconOrder} alt="order-icon" />
          Check Order
        </a
        ><a href="#">
          <img src={iconShop} alt="shop-icon" />
        Shop Now
        </a>
      </div>
    </header>
  );
};

export default Header;