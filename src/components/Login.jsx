import React from "react";
import { fetchLogin } from "../api/index";
import { Link } from "react-router-dom";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchLogin(username, password);

    console.log("USERPROFILE TOKEN", userProfile);
    localStorage.setItem("token", userProfile.token);
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    setIsLoggedIn(true);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleUsername}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={handlePassword}
        ></input>
        <button type="submit">Submit</button>
        <Link to="./register">Make New Account</Link>
      </form>
    </div>
  );
};

export default Login;
