import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";

class App extends Component {
  state = {
    theme: "dark",
  };

  changeTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <GlobalStyles />
        <Header routes={data.mainRoutes} changeTheme={this.changeTheme} />
        <Main />
      </ThemeProvider>
    );
  }
}

export default App;
