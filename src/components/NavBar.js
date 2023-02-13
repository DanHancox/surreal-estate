import React from "react";
import "../styles/navBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navBar">
        <img
          className="logoPic"
          src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
          alt="houselogo"
        />
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <a href="View Properties">View Properties</a>
          </li>
          <li className="navbar-links-item">
            <a href="add-property">Add a Property</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
