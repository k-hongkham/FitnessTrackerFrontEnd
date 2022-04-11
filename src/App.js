import React from "react";
import { Navbar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Main_Page_Container">
        <Navbar />
        <h1>Welcome to Fitness Tracker</h1>
      </div>
    </Router>
  );
}

export default App;
