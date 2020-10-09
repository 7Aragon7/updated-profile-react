import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="row" id="navbar">
        <div className="col-sm-6" id="name">
          <h1>John Aragon</h1>
        </div>
        <nav className="navbar navbar-expand-sm ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              < Link to="/" className="navbar-brand">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="navbar-brand">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="navbar-brand">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
};


export default Navbar;