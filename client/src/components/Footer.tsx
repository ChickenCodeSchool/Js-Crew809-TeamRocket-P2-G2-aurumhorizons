import { Link } from "react-router-dom";

import iconFacebook from "../assets/images/imgFooter/facebook.png";
import iconInstagram from "../assets/images/imgFooter/instagram.png";
import iconSnapchat from "../assets/images/imgFooter/snapchat.png";
import iconX from "../assets/images/imgFooter/twitter.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <hr className="hr-top-footer" />
        <div className="container-h2-footer">
          <h2 className="h2-footer">Aurum &nbsp;&nbsp;&nbsp;&nbsp;Horizons</h2>
        </div>
        <hr className="separator-footer" />
        <section className="container-mid-footer">
          <div className="container-icon-footer">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconInstagram}
                className="icon-footer"
                alt="instagram"
              />
            </a>
            <a
              href="https://x.com/X."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconX} className="icon-footer" alt="X" />
            </a>
            <a
              href="https://fr-fr.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconFacebook} className="icon-footer" alt="facebook" />
            </a>
            <a
              href="https://www.snapchat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconSnapchat} className="icon-footer" alt="snapchat" />
            </a>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Inscrivez-vous à la newletters..."
              required
            />
            <button type="submit" className="newsletter-button">
              →
            </button>
          </form>
        </section>
        <hr className="separator-footer" />
        <Link to="/mention-legal" className="mention-legal">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mention legal
        </Link>
      </div>
    </>
  );
}

export default Footer;
