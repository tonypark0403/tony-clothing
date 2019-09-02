const ActionTypes = {
  user: {
    SET_CURRENT_USER: "SET_CURRENT_USER"
  },
  cart: {
    TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
    ADD_ITEM: "ADD_ITEM",
    CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
    REMOVE_ITEM: "REMOVE_ITEM"
  },
  shop: {
    // UPDATE_COLLECTIONS: "UPDATE_COLLETIONS"
    FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
    FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
    FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE" //just in case of server down...
  }
};

export default ActionTypes;
