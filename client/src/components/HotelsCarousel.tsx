import React, { useState } from "react";
import Carousel from "./Carousel";
import "./HotelsCarousel.css";


interface Hotel {
  img: string;
  title: string;
  description: string;
}

const hotels: Hotel[] = [
  {
    img: "/assets/images/hotel-1.jpg",
    title: "The Nile Serenity",
    description: "An elegant riverside hotel offering luxurious suites with Nile views..."
  },
  {
    img: "/assets/images/hotel-2.jpg",
    title: "Pyramids Horizon Hotel",
    description: "Located near the Giza Pyramids, this hotel blends traditional architecture..."
  },
  {
    img: "/assets/images/hotel-3.jpg",
    title: "Desert Oasis Retreat",
    description: "Experience tranquility in the desert with spacious villas..."
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
        <Carousel images={hotels.map(h => h.img)} />
        <div className="carousel-buttons">
          <button onClick={prev}>❮</button>
          <button onClick={next}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;
