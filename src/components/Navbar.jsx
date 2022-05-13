import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light mb-4">
      <div className="container-fluid" id="nav-bar-container">
        <a href="/home" className="navbar-brand">
          <img
            src="https://cdn2.iconfinder.com/data/icons/quarantine-4/64/workout_exercise_fitness_gym_home_quarantine0-1024.png"
            width="65px"
            alt="site logo"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" herf="#">
                {" "}
                <Link to="routines">Routines</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" herf="#">
                {" "}
                <Link to="activities">Activities</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" herf="#">
                {" "}
                <Link to="myroutines">My Routines</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" herf="#">
                {" "}
                <Link to="login">Login</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" herf="#">
                {" "}
                <Link to="register">Register</Link>
              </a>
            </li>
            <span> </span>
            {isLoggedIn ? <Logout /> : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
