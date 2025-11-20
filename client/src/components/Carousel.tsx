import type React from "react";
import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState(true);

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

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [images.length, next]);

  if (!images || images.length === 0) return <div>No images available</div>;

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
