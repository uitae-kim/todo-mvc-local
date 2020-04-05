import * as types from "../ActionTypes";

const addTodo = (content) => ({
  type: types.ADD_TODO,
  payload: { content },
});

const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: { id },
});

const updateTodo = (id, done, content) => ({
  type: types.UPDATE_TODO,
  payload: { id, content, done },
});
