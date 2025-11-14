import type React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/AurumHorizonsLogoTransparent.png";
import UserIcon from "../assets/images/user-icon.png";

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
            <a href="/experience">Experiences</a>
          </li>
        </ul>
        <ul className="navbar__links navbar__links--right">
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <button type="button" className="navbar-user-btn">
              <img src={UserIcon} alt="User Icon" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
