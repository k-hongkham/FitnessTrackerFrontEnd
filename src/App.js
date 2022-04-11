import React, { useState, useEffect } from "react";
import { Navbar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="Main_Page_Container">
        <Navbar />
        <h1>Welcome to Fitness Tracker</h1>
        <Route path="/login">
          {isLoggedIn ? (
            <Logout
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : null}
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
