import { createStore } from "redux";
import { reducers } from "./reducers";

let storeCache = undefined;

export default () => {
  if (storeCache) return storeCache;
  const store = createStore(reducers, {});
  storeCache = store;
  return store;
};
