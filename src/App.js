import React, { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Register,
  Profile,
  Routines,
  Activities,
  Logout,
  Home,
} from "./components";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUser = localStorage.getItem("username");

    if (localToken) {
      setIsLoggedIn(true);
      setToken(localToken);
      if (localUser) {
        setUsername(localUser);
      }
    }
  }, []);

  return (
    <AuthProvider>
      <div className="Main_Page_Container">
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          {/* <h1>Welcome to Fitness Tracker</h1> */}
          <Route path="/home" element={<Home />} />
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

          <Route path="routines" element={<Routines />}></Route>

          <Route
            path="activities"
            element={<Activities token={token} />}
          ></Route>

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
          <Route
            path="/myroutines"
            element={
              <Profile
                username={username}
                setUsername={setUsername}
                token={token}
                setToken={setToken}
              />
            }
          ></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
