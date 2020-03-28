import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  > p {
    color: rgba(175, 47, 47, 0.15);
    font-weight: 100;
    font-size: 100px;
    text-align: center;
    margin: 16px;
  }
`;

export const Header = () => {
  return <StyledHeader>
    <p>todos</p>
  </StyledHeader>;
};
