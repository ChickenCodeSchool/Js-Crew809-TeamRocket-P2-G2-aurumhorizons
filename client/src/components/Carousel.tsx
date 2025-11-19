import type React from "react";
import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  destinationName: string;
}

const Carousel: React.FC<CarouselProps> = ({ destinationName }) => {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `http://localhost:3310/api/destinations/name/${destinationName}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch destination");
        }

        const destination = await response.json();

        if (destination?.images && destination.images.length > 0) {
          setImages(destination.images);
        } else {
          setError(`No images found for ${destinationName}`);
        }
      } catch (err) {
        setError("Error loading images");
        console.error("Error fetching destination:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
    setIndex(0); // reset slider when destination changes
  }, [destinationName]);

  const next = useCallback(() => {
    if (images.length === 0) return;
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 400);
  }, [images.length]);

  const prev = useCallback(() => {
    if (images.length === 0) return;
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 400);
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [images.length, next]);

  if (loading) return <div className="loading">Loading images...</div>;
  if (error) return <div className="error">{error}</div>;
  if (images.length === 0) return <div>No images available</div>;

  return (
    <div className="carousel">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
      />

      <div className="carousel-buttons">
        <button type="button" onClick={prev} className="carousel-button prev">
          ❮
        </button>
        <button type="button" onClick={next} className="carousel-button next">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
