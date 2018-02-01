import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav class="navbar">
    <a class="navbar-brand" href={'Home'}>MERN Commerce</a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href={'Home'}>Home</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Admin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
