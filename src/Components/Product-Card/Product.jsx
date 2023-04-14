import React from "react";
import "./Product.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);
  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">
          {"\u0024"} {price}
        </span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
