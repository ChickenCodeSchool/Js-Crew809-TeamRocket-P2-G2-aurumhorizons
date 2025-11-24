import type React from "react";
import "./MenuDeroulant.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Destination {
  name: string;
  link: string;
}

const MenuDeroulant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
    { name: "Indonesia", link: "/voyage/1" },
    { name: "Egypt", link: "/voyage/2" },
    { name: "Maldives", link: "/voyage/3" },
    { name: "Philippines", link: "/voyage/4" },
    { name: "Seychelles", link: "/voyage/5" },
    { name: "Iceland", link: "/voyage/6" },
    { name: "See more...", link: "/see-more" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-deroulant" ref={menuRef}>
      {/* Colonne 1 : Nos expériences */}
      <div className="menu-left">
        <button className="menu-button" onClick={toggleMenu} type="button">
          Experiences
          <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
        </button>

        {isOpen && (
          <ul className="menu-list">
            {destinations.map((destination) => (
              <li key={destination.name}>
                <Link to={destination.link} className="menu-item">
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="menu-separator" />

      {/* Colonne 2 : Inspirations */}
      <div className="menu-right">
        <Link to="/inspiration" className="menu-link">
          Inspirations
        </Link>
      </div>
    </div>
  );
};

export default MenuDeroulant;
