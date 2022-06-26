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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ghKpssGXQVD-C5bdw0NV6s-d5QIojhNcSQ&usqp=CAU"
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
