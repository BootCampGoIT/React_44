import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";
// const func = (a,b) => a+b
// func(1,3)

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

// function get(q) {
//   return function (w) {
//     return function (e) {
//       console.log(q + w + e);
//     };
//   };
// }
// ===============
// const get = (q) => (w) => (e) => console.log(q + w + e);
// get(1)(3)(5);

// ===============

// const counter = (initialValue) => (step) => (initialValue += step);

// const zoom = counter(50);
// const volume = counter(90);
// console.log(zoom(10)); //60
// console.log(zoom(-10));
// console.log(zoom(-10));

// console.log(volume(10)); //100
// console.log(volume(10)); //110
// console.log(volume(10)); //120
// console.log(volume(10)); //130

// =================
// const getValue = (initialValue) => ({ x: initialValue });

// getValue(10);
