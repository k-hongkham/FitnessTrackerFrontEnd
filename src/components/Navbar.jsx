import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <h1>NAVBAR</h1>
      </nav>
    </div>
  );
};

export default Navbar;
