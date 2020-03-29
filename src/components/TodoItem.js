import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const StyledTodoItem = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(77, 77, 77, 0.2);
`;

const CheckboxWrapper = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #22c67d;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid ${props => props.done ? "rgba(77, 77, 77, 0.3)" : "rgba(27, 28, 37, 0.1)"};
  display: flex;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

const TextBlock = styled.p`
  padding: 16px;
  margin: 0;
  word-break: break-all;
  line-height: 1.2;
  transition: color 0.3s ease-out;
  font-size: 24px;
  font-weight: 200;
  color: ${props => props.done ? "rgba(77, 77, 77, 0.3)" : "#4d4d4d"};
  text-decoration: ${props => props.done ? "line-through" : "none"};
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 16px;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  color: #ff8080;
  font-size: 40px;
  bottom: 4px;
  cursor: pointer;
  line-height: 40px;
  transition: opacity 0.15s ease-out;
  font-weight: 100;
  ${StyledTodoItem}:hover & {
    opacity: 1.0;
  }
`;


const TodoItem = (props) => {
  const { todo, handleDelete, handleUpdate } = props;
  const [edit, setEdit] = React.useState(false);

  return <StyledTodoItem onDoubleClick={() => setEdit(!edit)}>
    {edit ? <Input
      value={todo.content}
      onBlur={() => setEdit(false)}
      onChange={(e) => handleUpdate(todo.id, todo.done, e.target.value)} />
      : <>
        <CheckboxWrapper
          done={todo.done}
          onClick={() => handleUpdate(todo.id, !todo.done, todo.content)}>
          {todo.done ? "✓" : ""}
        </CheckboxWrapper>
        <TextBlock done={todo.done}>
          {todo.content}
        </TextBlock>
        <DeleteButton onClick={() => handleDelete(todo.id)}> × </DeleteButton>
      </>}
  </StyledTodoItem >;
};

export default TodoItem;
