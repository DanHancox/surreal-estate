import React from "react";
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
        <Properties />
        <AddProperty />
      </header>
    </div>
  );
};

export default App;
