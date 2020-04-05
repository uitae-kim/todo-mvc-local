import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import {
  Container,
  Header,
  Section,
  Footer,
} from "./components";
import createStore from "./redux";

const store = createStore();
const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f5f5;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Header />
        <Section />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
