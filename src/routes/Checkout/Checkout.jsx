import "./Checkout.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../Components/Payment/payment-form";

import CheckoutItem from "../../Components/checkout-item/CheckoutItem";

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="Checkout">
      <div className="header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : ${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
