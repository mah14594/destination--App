import React from "react";
import logo from "../Images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 navbar-light">
      <div className="container">
        <Link className="col-6 col-lg-8 col-xl-9 navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>

        <div
          className="collapse navbar-collapse nav-links"
          id="basicExampleNav"
        >
          <ul className="d-flex flex-column flex-lg-row nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/wishlist">
                Favourits
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
