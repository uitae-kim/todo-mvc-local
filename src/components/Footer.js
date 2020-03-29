import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 32px;
  p {
    text-align: center;
    color: rgb(191, 191, 191);
    font-weight: 300;
    font-size: 10px;
    margin: 10px 0;
  }

  a {
    color: #4d4d4d;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;


export const Footer = () => {
  return <StyledFooter>
    <p>Double-click to edit a todo</p>
    <p>Created by <a target="blank" href="https://github.com/minidonut">Karl Saehun Chung</a></p>
    <p>Part of <a target="blank" href="http://todomvc.com/">TodoMVC</a></p>
  </StyledFooter>;
};
