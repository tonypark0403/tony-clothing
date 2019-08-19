import React from "react";

import "./cart-dropdown.scss";
import CustomButton from "../../custom-button";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;