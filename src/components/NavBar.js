import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <img
          className="logoPic"
          src="http://clipart-library.com/new_gallery/3-30105_white-house-logo-png-village-icon-png.png"
          alt="houselogo"
        />
        <ul className="navbar-links">
          <Link className="item" to="/">
            View Properties
          </Link>
          <Link className="item" to="/add-property">
            Add Properties
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
