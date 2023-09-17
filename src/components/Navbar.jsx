import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="navbar-links">
        <Link to="/">
          <div>Accueil</div>
        </Link>
        <Link to="/about">
          <div>À propos</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;