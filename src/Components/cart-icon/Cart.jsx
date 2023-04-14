import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { ShoppingIcon, ItemCount, CartContainer } from "./CartIconStyle.jsx";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default Cart;
