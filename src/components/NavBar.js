import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="item" to="/">
            View Properties
          </Link>
          <Link className="item" to="add-properties">
            Add Properties
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
