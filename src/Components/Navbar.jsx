import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        PK <span>Entertainment</span>
      </Link>

      {/* Navigation */}
      <nav>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        

        {/* <Link to="/services">Services</Link> */}

        <Link to="/contact">Contact</Link>

      </nav>

      {/* Button */}
      <Link to="/contact" className="navbar-button">
        Let's Talk
      </Link>

    </header>
  );
}

export default Navbar;