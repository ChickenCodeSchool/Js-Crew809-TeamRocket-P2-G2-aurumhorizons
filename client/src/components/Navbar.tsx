import type React from "react";
import "./Navbar.css";
import logo from "../assets/images/Logo_Aurum_Horizons-sans-fond.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Aurum Horizons logo" />
      </div>

      <div className="navbar__links-container">
        <ul className="navbar__links navbar__links--left">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/experience">Expérience</a>
          </li>
        </ul>
        <ul className="navbar__links navbar__links--right">
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="tel:0102945634">01 02 94 56 34</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
