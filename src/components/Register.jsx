import React from "react";
import { fetchRegisterUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  hasUser,
  setHasUser,
}) => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchRegisterUser(username, password);

    // let storageToken = await userProfile.data.token;

    localStorage.setItem("token", result.token);
    localStorage.setItem("username", username);
    const myToken = localStorage.getItem("token");

    setToken(myToken);
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
        <button type="submit">Create User</button>
        <button
          to="login"
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Already have a login?
        </button>
      </form>
    </div>
  );
};

export default Register;
