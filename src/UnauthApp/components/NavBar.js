import React from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../../img/Logo.svg";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-logo">
        <li className="nav-bar-list-item">
          <Link to="/" className="nav-bar-logo router-link">
            <img src={Logo} alt="logo" />
            <span>Warehouse</span>
          </Link>
        </li>
      </ul>
      <ul className="nav-bar-list">
        <li className="nav-bar-list-item active">
          <NavLink to="/Sing-in" className="nav-bar-link router-link">
            Sing in
          </NavLink>
        </li>
        <li className="nav-bar-list-item">
          <NavLink to="/Sing-up" className="nav-bar-link router-link">
            Sing up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
