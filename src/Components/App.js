import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { data } from "../data/data";


const App = () => {
  return (
    <>
      <Header routes={data.mainRoutes} />
      <Main />
    </>
  );
};

export default App;
