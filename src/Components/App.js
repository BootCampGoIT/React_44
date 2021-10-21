import React, { Component, useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";
import HomeWork from "./homeWork/HomeWork";
import Test from "./test/Test";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
    {/* <Test /> */}
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header routes={data.mainRoutes} changeTheme={changeTheme} />
      <Main />
    </ThemeProvider>
    </>
  );
};

export default App;
// class App extends Component {
//   state = {
//     theme: "dark",
//   };

//   changeTheme = () => {
//     this.setState((prev) => ({
//       theme: prev.theme === "dark" ? "light" : "dark",
//     }));
//   };

//   render() {
//     return (
//       // <>
//       //   {/* <Test /> */}
//       //   {/* <HomeWork /> */}
//       // </>
//       <ThemeProvider theme={themes[this.state.theme]}>
//         <GlobalStyles />
//         <Header routes={data.mainRoutes} changeTheme={this.changeTheme} />
//         <Main />
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
