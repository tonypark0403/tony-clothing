import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import helloMiddleWare from "./middleware/hello";

let isWindowExtension = true;
let reduxDevtoolsExtension;

//array
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  middlewares.push(helloMiddleWare);
  reduxDevtoolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}
export const store =
  isWindowExtension && process.env.NODE_ENV === "development"
    ? createStore(
        rootReducer,
        compose(
          applyMiddleware(...middlewares),
          reduxDevtoolsExtension
        )
      )
    : createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
