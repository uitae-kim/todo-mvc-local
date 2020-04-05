import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer";

export const reducers = combineReducers({
  todoReducer,
});
