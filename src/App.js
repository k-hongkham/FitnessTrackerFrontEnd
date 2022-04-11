import React, { useState, useEffect } from "react";
import { Navbar, Login, Register, Profile } from "./components/index";
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
    <Router>
      <div className="Main_Page_Container">
        <Navbar />
        <Routes>
          {/* <h1>Welcome to Fitness Tracker</h1> */}
          <Route
            path="/Login"
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
          {/* {isLoggedIn ? (
            <Logout
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : null} */}

          <Route
            path="/Register"
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
            path="/my routines"
            element={
              <Profile
                token={token}
                setToken={setToken}
                profile={profile}
                setProfile={setProfile}
                routines={routines}
                setRoutines={setRoutines}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
