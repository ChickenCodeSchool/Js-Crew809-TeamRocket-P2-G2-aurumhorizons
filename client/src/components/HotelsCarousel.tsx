import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HotelsCarousel.css";

export interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

interface HotelsCarouselProps {
  hotels: Hotel[];
  destinationName?: string;
}

const HotelsCarousel: React.FC<HotelsCarouselProps> = ({
  hotels,
  destinationName,
}) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % hotels.length);
      setFade(true);
    }, 400);
  }, [hotels.length]);

  const prev = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
      setFade(true);
    }, 400);
  }, [hotels.length]);

  useEffect(() => {
    if (hotels.length > 0) {
      const interval = setInterval(() => next(), 5000);
      return () => clearInterval(interval);
    }
  }, [hotels.length, next]);

  if (!hotels || hotels.length === 0)
    return <div>{t("hotels_no_hotels_available")}</div>;

  const hotel = hotels[index];

  return (
    <div className="hotels-section">
      {destinationName && (
        <h2 className="section-title">
          {t("hotels_section_title", { destination: destinationName })}
        </h2>
      )}
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
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder-hotel.jpg";
            }}
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

export default HotelsCarousel;
