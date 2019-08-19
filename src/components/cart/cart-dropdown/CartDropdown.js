import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../custom-button";
import CartItem from "../cart-item";

import "./cart-dropdown.scss";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  // console.log("CartDropdown - otherProps : ", otherProps);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {// 0, false, undefined, null, NaN, "" are all regards as false
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
