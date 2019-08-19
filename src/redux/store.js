import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import helloMiddleWare from "./middleware/hello";

const isWindowExtension = false;
const reduxDevtoolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//array
const middlewares = [logger, helloMiddleWare];

const store = isWindowExtension
  ? createStore(rootReducer, reduxDevtoolsExtension)
  : createStore(rootReducer, applyMiddleware(...middlewares));

export default store;