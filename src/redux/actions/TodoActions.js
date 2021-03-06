import * as types from "../ActionTypes";

export const addTodo = (content) => ({
  type: types.ADD_TODO,
  payload: { content },
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: { id },
});

export const updateTodo = (id, done, content) => ({
  type: types.UPDATE_TODO,
  payload: { id, content, done },
});
