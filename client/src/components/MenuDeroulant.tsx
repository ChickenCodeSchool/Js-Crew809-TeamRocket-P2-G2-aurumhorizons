import type React from "react";
import "./MenuDeroulant.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

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
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="menu-button" onClick={toggleMenu}>
          Experiences
          <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
        </button>

        {isOpen && (
          <ul className="menu-list">
            {destinations.map((destination, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>
                <Link to={destination.link} className="menu-item">
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="menu-separator"></div>
      {/* Colonne 2 : Inspirations */}
      <div className="menu-right">
        <a href="/inspirations" className="menu-link">
          Inspirations
        </a>
      </div>
    </div>
  );
};

export default MenuDeroulant;
