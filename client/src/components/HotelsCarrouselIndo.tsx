import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HotelsCarousel.css";

import hotel1 from "../assets/images/imgIndonesia/hotel1.jpg";
import hotel2 from "../assets/images/imgIndonesia/hotel2.jpg";
import hotel3 from "../assets/images/imgIndonesia/hotel3.jpg";

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
    link: "https://fr.hotels.com/ho324822/",
  },
  {
    img: hotel2,
    title: "Pyramids Horizon Hotel",
    description:
      "Just steps away from the majestic Pyramids of Giza, Pyramids Horizon Hotel blends traditional elegance with modern comfort. Its rooms offer exceptional views of ancient monuments, while the hotel features a refined restaurant, a panoramic lounge, and private excursions. Each stay is designed to immerse travelers in history and culture while enjoying discreet and sophisticated luxury.",
    link: "https://fr.hotels.com/ho546722/",
  },
  {
    img: hotel3,
    title: "Desert Oasis Retreat",
    description:
      "In the heart of the Egyptian desert, Desert Oasis Retreat is a true sanctuary of peace. Secluded villas provide privacy and comfort with terraces overlooking golden dunes and stunning sunsets. The hotel offers exclusive activities such as private safaris, local cooking classes, and spa treatments, creating a unique experience where luxury and nature meet for unforgettable memories.",
    link: "https://www.stayforlong.fr/hotel/eg/meraki-resort-adults-only-all-inclusive_hurghada-and-vicinity",
  },
];

const HotelsCarrouselIndo: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % hotels.length);
      setFade(true);
    }, 400);
  }, []);

  const prev = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
      setFade(true);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]); // ✅ next dans les dépendances

  const hotel = hotels[index];

  return (
    <div className="hotels-section">
      <h2 className="section-title">
        {t("hotels_section_title", { destination: "Egypt" })}
      </h2>
      <div className="hotels-carousel-page">
        <div className="hotels-text-section">
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>
          <a
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hotel-link-button"
          >
            {t("hotels_visit_website")}
          </a>
        </div>

        <div className="hotels-carousel-section">
          <img
            src={hotel.img}
            alt={hotel.title}
            className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
          />
          <div className="carousel-buttons">
            <button type="button" onClick={prev} aria-label={t("hotels_prev")}>
              ❮
            </button>
            <button type="button" onClick={next} aria-label={t("hotels_next")}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarrouselIndo;
