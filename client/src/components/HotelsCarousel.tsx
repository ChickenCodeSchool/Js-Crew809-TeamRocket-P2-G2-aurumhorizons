import type React from "react";
import { useEffect, useState } from "react";
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
const hotelImages: { [key: string]: string } = {
  "The Nile Serenity": hotel1,
  "Pyramids Horizon Hotel": hotel2,
  "Desert Oasis Retreat": hotel3,
};

const HotelsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:3310/api/destinations/name/Egypt');


        
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        
        const egyptDestination = await response.json();
        
        if (egyptDestination?.hotels) {
          setHotels(egyptDestination.hotels);
        } else {
          setError('No hotels found for Egypt');
        }
      } catch (err) {
        setError('Error loading hotels');
        console.error('Error fetching destinations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

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
    if (hotels.length > 0) {
      const interval = setInterval(() => next(), 5000);
      return () => clearInterval(interval);
    }
  }, [hotels]);

  if (loading) return <div className="loading">Loading hotels...</div>;
  if (error) return <div className="error">{error}</div>;
  if (hotels.length === 0) return <div>No hotels available</div>;

  const hotel = hotels[index];

  return (
    <div className="hotels-section">
      <h2 className="section-title">Our Exclusive Hotels</h2>
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
            src={hotelImages[hotel.title] || hotel.img}
            alt={hotel.title}
            className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
          />
          <div className="carousel-buttons">
            <button type="button" onClick={prev}>❮</button>
            <button type="button" onClick={next}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;