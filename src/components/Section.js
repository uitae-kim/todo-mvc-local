import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  > div {
    display: flex;
    align-items: center;
    label {
      transform: rotate(90deg);
      margin: 0 8px 0 16px;
      flex-shrink: 0;
      font-size: 22px;
    }
  }
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: 16px 16px 16px 16px;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  color: rgba(77, 77, 77, 1.0);
  font-weight: 100;
  ::placeholder {
    color: rgba(27, 28, 37, 0.3);
    font-style: italic;
  }
`;


export const Section = () => {
  const [value, setValue] = React.useState("");

  return <StyledSection>
    <div>
      <label style={{ color: "rgba(77, 77, 77, 0.3)" }}>{"❯"}</label>
      <Input
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => { setValue(e.target.value); }} />
    </div>
  </StyledSection>;
};
