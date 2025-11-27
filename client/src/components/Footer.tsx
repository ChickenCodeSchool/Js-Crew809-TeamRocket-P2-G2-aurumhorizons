import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo_Aurum_Horizons-sans-fond.png";
import "./Footer.css";

function Footer() {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();
  const isInspirationPage =
    currentPath === "/inspiration" || currentPath === "/inspiration/";

  console.log("Chemin actuel :", location.pathname);
  console.log("Doit être caché ?", isInspirationPage);

  return (
    <>
      <div
        className={`footer ${isInspirationPage ? "hidden-on-landscape" : ""}`}
      >
        <div className="container-h2-footer">
          <img src={logo} className="logo-footer" alt="logo" />
        </div>
        <hr className="separator-footer" />
        <section className="container-mid-footer">
          <div className="container-icon-footer">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/images/youtube-circle.svg"
                alt="youtube"
                className="icon-footer"
              />
            </a>
            <a
              href="https://fr.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/images/pinterest.svg"
                alt="pinterest"
                className="icon-footer"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/images/imgFooter/instagram.svg"
                alt="instagram"
                className="icon-footer"
              />
            </a>
            <a
              href="https://x.com/Accueil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/images/imgFooter/twitter-alt.svg"
                alt="twitter"
                className="icon-footer"
              />
            </a>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Sign up for the newsletter..."
              required
            />
            <button type="submit" className="newsletter-button">
              →
            </button>
          </form>
        </section>
        <hr className="separator-footer" />
        <Link to="/mention-legal" className="mention-legal">
          Legal notice
        </Link>
      </div>
    </>
  );
}

export default Footer;
