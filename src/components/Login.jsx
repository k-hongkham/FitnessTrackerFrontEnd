import React from "react";
import { fetchLogin } from "../api/index";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfile = await fetchLogin(username, password);

    localStorage.setItem("token", userProfile.token);
    localStorage.setItem("username", username);

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
          required
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={handlePassword}
          required
          minLength={8}
        ></input>
        <button type="submit">Submit</button>
        <button
          to="register"
          onClick={(e) => {
            navigate("/register");
          }}
        >
          Make New Account
        </button>
      </form>
    </div>
  );
};

export default Login;
