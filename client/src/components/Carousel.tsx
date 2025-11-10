import React, { useState, useEffect } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 400);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 400);
  };

   useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval); 
  }, [index]);

  return (
    <div className="carousel">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
      />
      <div className="carousel-buttons">
        <button onClick={prev} className="carousel-button prev">❮</button>
        <button onClick={next} className="carousel-button next">❯</button>
      </div>
    </div>
  );
};

export default Carousel;
