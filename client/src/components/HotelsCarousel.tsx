import React, { useState, useEffect } from "react";
import "./HotelsCarousel.css";

import hotel1 from "../assets/images/hotel-egypt-1.jpg.webp";
import hotel2 from "../assets/images/hotel-egypt-2.jpg.webp";
import hotel3 from "../assets/images/hotel-egypt-3.jpg.avif";

interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

const hotels: Hotel[] = [
  {
    img: hotel1,
    title: "The Nile Serenity",
    description:
      "Located along the Nile River, The Nile Serenity offers spacious suites with breathtaking views of the water. Every detail is designed for comfort and refinement, featuring personalized service and a luxurious spa. Guests can enjoy sunrise boat rides, gourmet dining with local ingredients, and a peaceful atmosphere that invites relaxation and contemplation of Egypt's iconic landscapes.",
      link: "https://www.thenileserenity.com"
  },
  {
    img: hotel2,
    title: "Pyramids Horizon Hotel",
    description:
      "Just steps away from the majestic Pyramids of Giza, Pyramids Horizon Hotel blends traditional elegance with modern comfort. Its rooms offer exceptional views of ancient monuments, while the hotel features a refined restaurant, a panoramic lounge, and private excursions. Each stay is designed to immerse travelers in history and culture while enjoying discreet and sophisticated luxury.",
      link: "https://www.thenileserenity.com"
  },
  {
    img: hotel3,
    title: "Desert Oasis Retreat",
    description:
      "In the heart of the Egyptian desert, Desert Oasis Retreat is a true sanctuary of peace. Secluded villas provide privacy and comfort with terraces overlooking golden dunes and stunning sunsets. The hotel offers exclusive activities such as private safaris, local cooking classes, and spa treatments, creating a unique experience where luxury and nature meet for unforgettable memories.",
      link: "https://www.thenileserenity.com"
  }
];

const HotelsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % hotels.length);
      setFade(true);
    }, 400);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, []);

  const hotel = hotels[index];

  return (
    <div className="hotels-carousel-page">
      <div className="hotels-text-section">
        <h2>{hotel.title}</h2>
        <p>{hotel.description}</p>
        <a 
    href={hotels[index].link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hotel-link-button"
  >
    Visit Website
  </a>
      </div>

      <div className="hotels-carousel-section">
        <img
          src={hotel.img}
          alt={hotel.title}
          className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        />
        <div className="carousel-buttons">
          <button onClick={prev}>❮</button>
          <button onClick={next}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;
