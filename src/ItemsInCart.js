import React from "react";
import "./ItemsInCart.css";

function ItemsInCart({ item }) {
  return (
    <div className="itemsInCart">
      <img className="product__image" src={item.image} alt="product__photo" />
      <div>
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
        <button className="checkout__button">Remove from cart</button>
      </div>
    </div>
  );
}

export default ItemsInCart;
