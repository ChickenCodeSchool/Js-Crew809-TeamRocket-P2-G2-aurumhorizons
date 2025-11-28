import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import mathieu from "../assets/images/imgAbout/MathieuViking.png";
import maxime from "../assets/images/imgAbout/MaximePharaon.png";
import remi from "../assets/images/imgAbout/RemiSeychelles.png";
import sofian from "../assets/images/imgAbout/SofianBali.png";
import teddy from "../assets/images/imgAbout/TeddyMaldive.png";
import thibaud from "../assets/images/imgAbout/ThibaudPhillipines.png";

import "./TeamCarouselAbout.css";

const TeamCarousel = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { id: "sofian", src: sofian, name: "Sofian", destinationKey: "indonesia" },
    { id: "remi", src: remi, name: "Rémi", destinationKey: "seychelles" },
    { id: "teddy", src: teddy, name: "Teddy", destinationKey: "maldives" },
    { id: "mathieu", src: mathieu, name: "Mathieu", destinationKey: "iceland" },
    { id: "maxime", src: maxime, name: "Maxime", destinationKey: "egypt" },
    {
      id: "thibaud",
      src: thibaud,
      name: "Thibaud",
      destinationKey: "philippines",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setItemsPerPage(1);
      else if (window.innerWidth < 992) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - itemsPerPage)
      setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(teamMembers.length - itemsPerPage);
  };

  return (
    <div className="carousel-wrapper">
      <button type="button" onClick={prevSlide} className="nav-btn left">
        ❮
      </button>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="carousel-card">
              <div className="card-content">
                <img
                  src={member.src}
                  alt={`${member.name} ${t(member.destinationKey)}`}
                />
                <div className="card-overlay">
                  <h3>{member.name}</h3>
                  <p>{t(member.destinationKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button type="button" onClick={nextSlide} className="nav-btn right">
        ❯
      </button>
    </div>
  );
};

export default TeamCarousel;
