import React from "react";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <img
          className="logoPic"
          src="https://play-lh.googleusercontent.com/w5qmYcJt_BK4JmvHrQlAB_0aHLQoE_rNA-kZUKjbmaFpJd5jrZmVgv13JLQQ16MXxw=w526-h296-rw"
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
};

export default NavBar;
