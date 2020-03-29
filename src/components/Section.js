import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import Filter from "./Filter";
import { Input } from "./Input";
let todoCounter = 1;

const StyledSection = styled.section`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  > div {
    label {
      transform: rotate(90deg);
      margin: 0 8px 0 20px;
      flex-shrink: 0;
      font-size: 22px;
    }
  }
`;


export const Section = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([{ id: 0, done: false, content: "Hello~" }]);
  const [filter, setFilter] = React.useState("all");

  const deleteTodo = React.useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos, setTodos]);

  const updateTodo = React.useCallback((id, done, content) => {
    setTodos(todos.map(x => x.id === id ? { ...x, done, content } : x));
  }, [todos, setTodos]);

  const addTodo = React.useCallback((e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { content: value, id: todoCounter++, done: false }]);
      setValue("");
    }
  }, [value, todos, setTodos, setValue]);

  const handleClear = React.useCallback(() => {
    setTodos(todos.filter(x => x !== "done"));
  }, [todos, setTodos]);


  return <StyledSection>
    <div style={{ display: "flex", alignItems: "center" }}>
      <label style={{ color: "rgba(77, 77, 77, 0.2)" }}>{"❯"}</label>
      <Input
        placeholder="What needs to be done?"
        value={value}
        onKeyPress={addTodo}
        onChange={(e) => { setValue(e.target.value); }} />
    </div>
    {todos
      .filter(todo => filter === "all" ? true : filter === "completed" ? todo.done : !todo.done)
      .map(todo => <TodoItem
        todo={todo}
        handleDelete={deleteTodo}
        handleUpdate={updateTodo}
        key={todo.id} />)}
    {todos.length ? <Filter
      filter={filter}
      setFilter={setFilter}
      count={todos.length}
      clear={handleClear}
    /> : null}
  </StyledSection>;
};
