import React, {useState, useRef, useEffect} from "react";
import "./MenuDeroulant.css";

interface Destination {
    name: string;
    link: string;
}

const MenuDeroulant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const destinations : Destination[] = [
        {name: "Indonesia", link: "/indonesia"},
        {name: "Egypt", link: "/egypt"},
        {name: "Maldives", link: "/maldives"},
        {name: "Philippines", link: "/philippines"},
        {name: "Seychelles", link: "/seychelles"},
        {name: "Iceland", link: "/iceland"},
        {name: "Voir plus...", link: ""},
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

        return(
            <div className="menu-deroulant" ref={menuRef}>
                {/* Colonne 1 : Nos expériences */}
             <div className="menu-left">  
                <button className="menu-button" onClick={toggleMenu}>
                    Nos Experiences
                    <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
                </button>

                {isOpen && (
                    <ul className="menu-list">
                        {destinations.map((destination, index) => (
                            <li key={index}>
                            <a href={destination.link} className="menu-item">{destination.name}
                            </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
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
