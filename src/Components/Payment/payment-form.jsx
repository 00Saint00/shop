import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { PaymentContainer, FormContainer } from "./payment-styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.base}>Pay Now</Button>
      </FormContainer>
    </PaymentContainer>
  );
};

export default PaymentForm;
