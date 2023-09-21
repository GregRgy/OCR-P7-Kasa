import React from "react";
import "./Navbar.scss";
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>
      <div className="navbar-logo">
        <img src={logo} alt="Logo"/>
      </div>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div>À propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;