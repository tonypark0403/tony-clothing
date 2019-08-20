import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//if you want sessionStorage, just use sessionStorage instead of storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //for user, firebase handles. for whitelist, reducer name is needed
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
