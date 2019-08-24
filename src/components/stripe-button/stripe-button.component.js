import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Constants from "../../common/Constants";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = Constants.stripe.PUBLICSHABLE_KEY;

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="TONY Clothing Ltd."
      currency="CAD"
      billingAddress
      shippingAddress
      image="https://www.svgrepo.com/show/65695/shopping-cart.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
