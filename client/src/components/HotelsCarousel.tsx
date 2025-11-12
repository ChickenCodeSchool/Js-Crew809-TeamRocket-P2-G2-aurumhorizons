import React, { useState } from "react";
import Carousel from "./Carousel";
import "./HotelsCarousel.css";


import hotel1 from "../assets/images/hotel-egypt-1.jpg.webp";
import hotel2 from "../assets/images/hotel-egypt-2.jpg.webp";
import hotel3 from "../assets/images/hotel-egypt-3.jpg.avif";

interface Hotel {
  img: string;
  title: string;
  description: string;
}

const hotels: Hotel[] = [
  {
    img: hotel1,
    title: "The Nile Serenity",
    description:
      "An elegant riverside hotel offering luxurious suites with Nile views, exceptional dining, and a serene spa experience."
  },
  {
    img: hotel2,
    title: "Pyramids Horizon Hotel",
    description:
      "Located near the Giza Pyramids, this hotel blends traditional architecture with modern luxury, providing an unforgettable stay."
  },
  {
    img: hotel3,
    title: "Desert Oasis Retreat",
    description:
      "Experience tranquility in the desert with spacious villas, personalized service, and breathtaking sunset vistas over golden dunes."
  }
];

const HotelsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % hotels.length);
  const prev = () => setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);

  return (
    <div className="hotels-carousel-page">
      <div className="hotels-text-section">
        <h2>{hotels[index].title}</h2>
        <p>{hotels[index].description}</p>
      </div>

      <div className="hotels-carousel-section">
        <Carousel images={hotels.map((h) => h.img)} />
        <div className="carousel-buttons">
          <button onClick={prev}></button>
          <button onClick={next}></button>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;

