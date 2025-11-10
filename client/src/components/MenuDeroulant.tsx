import { Link } from "react-router-dom";
import "./MenuDeroulant.css";
import { useEffect, useRef, useState } from "react";

const MenuDeroulant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const destinations = [
    { name: "Indonesia", link: "/indonesia" },
    { name: "Egypt", link: "/egypt" },
    { name: "Maldives", link: "/maldives" },
    { name: "Philippines", link: "/philippines" },
    { name: "Seychelles", link: "/seychelles" },
    { name: "Iceland", link: "/iceland" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu-deroulant" ref={menuRef}>
      <div className="menu-left">
        <button type="button" className="menu-button" onClick={toggleMenu}>
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
      <hr className="menu-separator" />
      <div className="menu-right">
        <Link to="/inspiration" className="menu-link">
          Inspirations
        </Link>
      </div>
    </div>
  );
};

export default MenuDeroulant;
