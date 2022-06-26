import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/64/23/lion-head-logo-icon-on-black-background-vector-26566423.jpg"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/Checkout">
          <div className="header__cart">
            <ShoppingCartOutlinedIcon className="cart__icon" />
            <span className="cart__name header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
        
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">New Guest</span>
          <span className="header__optionLine2">Sign Up</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Member</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
