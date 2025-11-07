import { Link } from "react-router-dom";
import logo from "../assets/images/Logo_Aurum_Horizons-sans-fond.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* <hr className="hr-top-footer" /> */}
        <div className="container-h2-footer">
          <img src={logo} className="logo-footer" alt="logo" />
        </div>
        <hr className="separator-footer" />
        <section className="container-mid-footer">
          <div className="container-icon-footer">
            <img src="../src/assets/images/youtube-circle.svg" alt="youtube" />
            <img src="../src/assets/images/pinterest.svg" alt="pinterest" />
            <img
              src="../src/assets/images/imgFooter/instagram.svg"
              alt="instagram"
            />
            <img
              src="../src/assets/images/imgFooter/twitter-alt.svg"
              alt="twitter"
            />
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
          Mentions légales
        </Link>
      </div>
    </>
  );
}

export default Footer;
