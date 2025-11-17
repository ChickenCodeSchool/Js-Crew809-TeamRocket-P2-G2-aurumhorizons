import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo sans fond texte blanc.png";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inspiration">Inspiration</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
            <a href="/see-more">Experiences</a>
          </li>
        </ul>
        <ul className="navbar__links navbar__links--right">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="tel:0102945634">01 02 94 56 34</a>{" "}
            {/* téléphone reste en <a> */}
            <a href="/about">About us</a>
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
