import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div id="nav-bar-container">
      <nav>
        <Link to="home">Home</Link>
        <span> </span>
        <Link to="routines">Routines</Link>
        <span> </span>
        <Link to="my routines">My Routines</Link>
        <span> </span>
        <Link to="activities">Activities</Link>
        <span> </span>
        <Link to="login">Login</Link>
        <span> </span>
        <Link to="register">Register</Link>
        <span> </span>
        {isLoggedIn ? <Logout /> : null}
      </nav>
    </div>
  );
};

export default Navbar;
