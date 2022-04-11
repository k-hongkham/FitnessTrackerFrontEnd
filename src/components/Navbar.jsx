import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav-bar-container">
      <nav>
        <NavLink to="home">Home</NavLink>
        <span> </span>
        <NavLink to="routines">Routines</NavLink>
        <span> </span>
        <NavLink to="my routines">My Routines</NavLink>
        <span> </span>
        <NavLink to="activities">Activities</NavLink>
        <span> </span>
        <NavLink to="login/register">Login</NavLink>
        <span> </span>
        <h1>NAVBAR</h1>
      </nav>
    </div>
  );
};

export default Navbar;
