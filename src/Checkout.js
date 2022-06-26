import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import ItemsInCart from "./ItemsInCart";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://media.istockphoto.com/photos/brand-logo-name-identity-and-customer-concept-chalk-board-background-picture-id1292374288?b=1&k=20&m=1292374288&s=170667a&w=0&h=gnhMFGhyiHy_HL45ePklFcqNeyYlrV11GTpVP75UlEY="
        />
        <div>
          <h1 className="checkout__title">Shopping basket</h1>
        </div>
        <div className='checkout__basketItem'>
          {basket.map(singleItem => {
            return <ItemsInCart key={singleItem.id} item={singleItem} />
          
            
          })}

        </div>

      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
