import Button from "../Button/Button";
import React from "react";
import CartItem from "../Cart-item/CartItem";
import { Message, DropdownCont, CartItems } from "./Cart-drpdwnStyle";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";

const CartDrpdwn = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DropdownCont>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} CartItem={item} />)
        ) : (
          <Message>Your Cart is empty</Message>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}> CHECKOUT</Button>
    </DropdownCont>
  );
};

export default CartDrpdwn;
