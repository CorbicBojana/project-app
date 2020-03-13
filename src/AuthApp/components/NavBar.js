import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../img/Logo.svg";

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
          <Link to="/Categories" className="nav-bar-link router-link">
            Categories
          </Link>
        </li>
        <li className="nav-bar-list-item">
          <Link to="/Products" className="nav-bar-link router-link">
            Products
          </Link>
        </li>
        <li className="nav-bar-list-item">
          <Link to="/" className="nav-bar-link router-link">
            Suppliers
          </Link>
        </li>
        <li className="nav-bar-list-item">
          <Link to="/" className="nav-bar-link router-link">
            Warehouses
          </Link>
        </li>
        <li className="nav-bar-list-item">
          <Link to="/" className="nav-bar-link router-link">
            Employees
          </Link>
        </li>
        <li className="nav-bar-list-item">
          <Link to="/" className="nav-bar-link router-link">
            Arrivals
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
