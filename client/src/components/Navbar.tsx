import { type FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/AurumHorizonsLogoTransparent.png";
import UserIcon from "../assets/images/user-icon-black.png";
import GlassSurface from "../components/GlassSurface";
import DarkMods from "./DarkMods";
import Login from "./Login";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const languages = ["en", "fr", "es", "de", "zh"];
  const currentLang = (i18n.language ?? "en").toUpperCase();
  const isTargetPage = location.pathname === "/inspiration";

  // Ferme le menu quand l'URL change
  // biome-ignore lint/correctness/useExhaustiveDependencies: Nécessaire pour fermer le menu quand l'URL change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Ferme le menu quand on clique en dehors
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
            {/* Logo */}
            <div className="navbar__logo">
              <Link to="/">
                <img src={logo} alt="Aurum Horizons logo" />
              </Link>
            </div>

            {/* Menu burger mobile */}
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

            {/* Liens */}
            <div
              ref={menuRef}
              className={`navbar__links-container ${isMenuOpen ? "open" : ""}`}
            >
              <ul className="navbar__links navbar__links--left">
                <li>
                  <Link to="/">{t("navbar_home")}</Link>
                </li>
                <li>
                  <Link to="/inspiration">{t("navbar_inspiration")}</Link>
                </li>
                <li>
                  <Link to="/service">{t("navbar_services")}</Link>
                </li>
                <li>
                  <Link to="/see-more">{t("home_experiences")}</Link>
                </li>
              </ul>

              <ul className="navbar__links navbar__links--right">
                <li>
                  <DarkMods />
                </li>
                <li>
                  <Link to="/contact">{t("navbar_contact")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("navbar_about")}</Link>
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

                {/* Menu langue */}
                <li className="navbar__language-switcher">
                  <button
                    type="button"
                    className="navbar__lang-btn current-lang"
                    onClick={toggleLangMenu}
                  >
                    {currentLang} ▾
                  </button>
                  {isLangMenuOpen && (
                    <ul className="navbar__lang-dropdown">
                      {languages.map((lng) => (
                        <li key={lng}>
                          <button
                            type="button"
                            onClick={() => changeLanguage(lng)}
                            className="navbar__lang-btn"
                          >
                            {lng.toUpperCase()}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
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
