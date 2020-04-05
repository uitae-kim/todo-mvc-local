import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { createLogger } from "redux-logger";


let storeCache = undefined;

export default () => {
  if (storeCache) return storeCache;

  const middlewares = [];
  if (process.env.REACT_APP_ENV === "localhost") {
    middlewares.push(createLogger({ collapsed: true }));
  }
  const reduxMiddleware = applyMiddleware(...middlewares);
  const store = createStore(reducers, {}, reduxMiddleware);
  storeCache = store;
  return store;
};
