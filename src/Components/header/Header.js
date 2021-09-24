import React from "react";
import Navigation from "./navigation/Navigation";

const Header = ({ routes }) => {
  return (
    <header>
      <h1>ITED</h1>
      <Navigation routes={routes} />
    </header>
  );
};

export default Header;
