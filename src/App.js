import React from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Header,
  Section,
  Footer,
} from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f5f5;
  }
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
