import React from "react";
import "./Product.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">
          {"\u0024"} {price}
        </span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
