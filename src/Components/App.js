import React, { Component, useState, createContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

// console.dir(React);
export const MessageContext = createContext();
// console.log(MessageContext);
const App = () => {
  const [theme, setTheme] = useState("dark");
  // =================
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  // ===========
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const { Provider } = MessageContext;
  return (
    <>
      <Provider value={{ isOpen, toggle }}>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          <Header routes={data.mainRoutes} changeTheme={changeTheme} />
          <Main />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
