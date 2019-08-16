import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import helloMiddleWare from "./middleware/hello";

//array
const middlewares = [logger, helloMiddleWare];

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
