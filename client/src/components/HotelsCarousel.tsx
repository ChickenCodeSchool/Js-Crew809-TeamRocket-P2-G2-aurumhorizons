import type React from "react";
import { useCallback, useEffect, useState } from "react";
import "./HotelsCarousel.css";

interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

interface HotelsCarouselProps {
  destinationName: string;
}

const HotelsCarousel: React.FC<HotelsCarouselProps> = ({ destinationName }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/destinations/name/${destinationName}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const destination = await response.json();
        if (destination?.hotels && destination.hotels.length > 0) {
          setHotels(destination.hotels);
        } else {
          setError(`No hotels found for ${destinationName}`);
        }
      } catch (err) {
        setError("Error loading hotels");
        console.error("Error fetching destinations:", err);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    setError(null);
    setIndex(0);

    fetchHotels();
  }, [destinationName]);

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

  if (loading) return <div className="loading">Loading hotels...</div>;
  if (error) return <div className="error">{error}</div>;
  if (hotels.length === 0) return <div>No hotels available</div>;

  const hotel = hotels[index];

  return (
    <div className="hotels-section">
      <h2 className="section-title">
        Our Exclusive Hotels in {destinationName}
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
            Visit Website
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
            <button type="button" onClick={prev} aria-label="Previous hotel">
              ❮
            </button>
            <button type="button" onClick={next} aria-label="Next hotel">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;
