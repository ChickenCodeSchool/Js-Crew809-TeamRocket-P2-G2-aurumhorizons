import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/AurumHorizonsLogoTransparent.png";
import UserIcon from "../assets/images/user-icon-black.png";
import GlassSurface from "../components/GlassSurface";
import DarkMods from "./DarkMods";
import Login from "./Login";
const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <GlassSurface height={80} opacity={0.05}>
        <nav className="navbar-content">
          <div className="navbar__logo">
            <Link to="/">
              <img src={logo} alt="Aurum Horizons logo" />
            </Link>
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
          <div
            className={`navbar__links-container ${isMenuOpen ? "open" : ""}`}
          >
            <ul className="navbar__links navbar__links--left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inspiration">Inspiration</Link>
              </li>
              <li>
                <a href="/see-more">Experiences</a>
              </li>
            </ul>

            <ul className="navbar__links navbar__links--right">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <DarkMods />
              </li>
              <li>
                <button
                  type="button"
                  className="navbar-user-btn"
                  onClick={() => setShowLoginModal(true)}
                >
                  <img src={UserIcon} alt="User Icon" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </GlassSurface>
      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Navbar;
