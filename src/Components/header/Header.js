import React from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

const Header = ({ routes }) => {
  return (
    <HeaderContainer>
      <h1 className='headerTitle'>ITED</h1>
      <Navigation routes={routes} />
    </HeaderContainer>
  );
};

export default Header;
