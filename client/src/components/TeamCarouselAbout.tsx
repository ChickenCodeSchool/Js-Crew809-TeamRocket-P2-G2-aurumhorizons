import { useState } from "react";
import mathieu from "../assets/images/imgAbout/MathieuViking.png";
import maxime from "../assets/images/imgAbout/MaximePharaon.png";
import remi from "../assets/images/imgAbout/RemiSeychelles.png";
import sofian from "../assets/images/imgAbout/SofianBali.png";
import teddy from "../assets/images/imgAbout/TeddyMaldive.png";
import thibaud from "../assets/images/imgAbout/ThibaudPhillipines.png";

import "./TeamCarouselAbout.css";

const TeamCarousel = () => {
  const teamMembers = [
    { id: "mathieu", src: mathieu, name: "Mathieu", destination: "Island" },
    { id: "remi", src: remi, name: "Rémi", destination: "Seychelles" },
    { id: "maxime", src: maxime, name: "Maxime", destination: "Egypt" },
    { id: "sofian", src: sofian, name: "Sofian", destination: "Indonesia" },
    { id: "teddy", src: teddy, name: "Teddy", destination: "Maldives" },
    {
      id: "thibaud",
      src: thibaud,
      name: "Thibaud",
      destination: "Philippines",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(teamMembers.length - itemsPerPage);
    }
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
                  alt={`${member.name} ${member.destination}`}
                />

                <div className="card-overlay">
                  <h3>{member.name}</h3>
                  <p>{member.destination}</p>
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
