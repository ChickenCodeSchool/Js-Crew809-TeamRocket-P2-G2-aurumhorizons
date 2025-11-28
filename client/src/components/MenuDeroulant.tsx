import type React from "react";
import "./MenuDeroulant.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Destination {
  name: string;
  link: string;
}

const MenuDeroulant: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
    { name: t("destination_indonesia"), link: "/voyage/1" },
    { name: t("destination_egypt"), link: "/voyage/2" },
    { name: t("destination_maldives"), link: "/voyage/3" },
    { name: t("destination_philippines"), link: "/voyage/4" },
    { name: t("destination_seychelles"), link: "/voyage/5" },
    { name: t("destination_iceland"), link: "/voyage/6" },
    { name: t("destination_see_more"), link: "/see-more" },
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
      <div className="menu-left">
        <button className="menu-button" onClick={toggleMenu} type="button">
          {t("menu_experiences")}
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

      <div className="menu-right">
        <Link to="/inspiration" className="menu-button">
          {t("menu_inspirations")}
        </Link>
      </div>
    </div>
  );
};

export default MenuDeroulant;
