import type React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/Logo_Aurum_Horizons-sans-fond.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={logo} alt="Aurum Horizons logo" />
        </a>
      </div>

      <button
        type="button"
        className={`navbar__toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar__links-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar__links navbar__links--left">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
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
