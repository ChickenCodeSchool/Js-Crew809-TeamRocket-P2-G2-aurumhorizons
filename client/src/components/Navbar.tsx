import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/Logo sans fond texte blanc.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Aurum Horizons logo" />
      </div>

      <div className="navbar__links-container">
        <ul className="navbar__links navbar__links--left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inspiration">Inspiration</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
        <ul className="navbar__links navbar__links--right">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="tel:0102945634">01 02 94 56 34</a>{" "}
            {/* téléphone reste en <a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
