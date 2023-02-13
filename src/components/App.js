import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={Properties()} />
          <Route path="/add-Property" element={AddProperty()} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
