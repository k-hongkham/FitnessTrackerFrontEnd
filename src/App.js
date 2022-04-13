import React, { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Register,
  Profile,
  Routines,
  Activities,
  Logout,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [profile, setProfile] = useState("");

  useEffect(() => {});

  return (
    <div className="Main_Page_Container">
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        {/* <h1>Welcome to Fitness Tracker</h1> */}
        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              token={token}
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>

        {/* {isLoggedIn ? ( */}
        <Route
          path="/logout"
          element={
            <Logout
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        {/* ) : null} */}

        <Route path="routines" element={<Routines />}></Route>

        <Route path="activities" element={<Activities />}></Route>

        <Route
          path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              token={token}
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route path="/myroutines" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
