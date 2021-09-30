import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Header routes={data.mainRoutes} />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
