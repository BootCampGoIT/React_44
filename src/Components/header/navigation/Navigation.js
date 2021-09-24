import React from "react";

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
