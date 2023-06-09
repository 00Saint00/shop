import React from "react";
import "./CartItem.scss";

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="items">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}{" "}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
