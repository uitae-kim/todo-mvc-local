import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Section />
      <Footer />
    </Container>
  );
}

export default App;
