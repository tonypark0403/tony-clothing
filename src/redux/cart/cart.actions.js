import ActionTypes from "../action-types";

export const toggleCartHidden = () => ({
  type: ActionTypes.cart.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ActionTypes.cart.ADD_ITEM,
  payload: item
});