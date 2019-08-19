import ActionTypes from "../action-types";

export const toggleCartHidden = () => ({
  type: ActionTypes.cart.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ActionTypes.cart.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: ActionTypes.cart.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: ActionTypes.cart.REMOVE_ITEM,
  payload: item
});
