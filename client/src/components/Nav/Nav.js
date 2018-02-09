import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar">
    <a className="navbar-brand" href={'/'}>MERN Commerce</a>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>{' '}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>{' '}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">Admin</Link>{' '}
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">cart</Link>{' '}
      </li>
    </ul>
  </nav>
);

export default Nav;
