import React from "react";
import "./Navbar.css";
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="navbar-links">
        <div>Accueil</div>
        <div>À propos</div>
      </div>
    </nav>
  );
}

export default Navbar;