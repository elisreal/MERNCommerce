import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar">
    <a className="navbar-brand" href={'Home'}>MERN Commerce</a>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href={'Home'}>Home</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="{'Admin'}">Admin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
