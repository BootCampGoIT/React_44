import React from "react";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes }) => {
  return (
    <NavigationContainer>
      <ul className='navigationList'>
        {routes.map((route) => (
          <li key={route.path} className='navigationListItem'>
            <a href={route.path} className='navigationListLink'>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
