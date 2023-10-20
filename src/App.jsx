import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Blue from "./components/blue";
import Red from "./components/red";
import Home from "./components/home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
          <Link to="/">home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
