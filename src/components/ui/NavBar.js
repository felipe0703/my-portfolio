import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink exact activeClassName="bg-green-700" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="bg-green-700" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="bg-green-700" to="/projects">
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};
