import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;


export const Container = (props) => {
  return <StyledContainer>
    {props.children}
  </StyledContainer>;
};
