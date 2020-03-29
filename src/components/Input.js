import styled from "styled-components";

export const Input = styled.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: 16px 16px 16px 16px;
  width: 100%;
  font-size: 24px;
  font-weight: 200;
  line-height: 1.4em;
  ::placeholder {
    font-weight: 100;
    color: rgba(27, 28, 37, 0.3);
    font-style: italic;
  }
`;
