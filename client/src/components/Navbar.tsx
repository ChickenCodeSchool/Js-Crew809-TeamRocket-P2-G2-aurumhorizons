import { type FC, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/AurumHorizonsLogoTransparent.png";
import UserIcon from "../assets/images/user-icon-black.png";
import GlassSurface from "../components/GlassSurface";
import Login from "./Login";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isTargetPage = location.pathname === "/inspiration";

  // biome-ignore lint/correctness/useExhaustiveDependencies: Nécessaire pour fermer le menu quand l'URL change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  // ------------------

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={isTargetPage ? "hide-landscape" : ""}>
        <GlassSurface height={80} opacity={0.05}>
          <nav className="navbar-content">
            <div className="navbar__logo">
              <Link to="/">
                <img src={logo} alt="Aurum Horizons logo" />
              </Link>
            </div>

            <button
              ref={buttonRef}
              type="button"
              className={`navbar__toggle ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </button>
            <div
              ref={menuRef}
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
                  <Link to="/see-more">Experiences</Link>
                </li>
              </ul>

              <ul className="navbar__links navbar__links--right">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
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
      </div>

      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Navbar;
