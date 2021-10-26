import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes }) => {
  const { set } = useContext(LanguageContext);
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {routes.map((route) => (
          <li key={route.path} className='navigationListItem'>
            <a href={route.path} className='navigationListLink'>
              {set.navigation[route.name]}
            </a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
