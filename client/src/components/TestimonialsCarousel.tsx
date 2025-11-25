import { useEffect, useState } from "react";
import "./TestimonialsCarousel.css";

const testimonials = [
  { name: "Sophie H.", text: "Outstanding service and flawless organization." },
  { name: "Alexandre T.", text: "Private transfer was perfect." },
  { name: "Laura G.", text: "The tailored experiences were unforgettable." },
  { name: "David L.", text: "An exclusive event beyond expectations." },
];

export const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="test-carousel-container">
      <h3 className="test-carousel-title">What Our Clients Say</h3>

      <div className="test-carousel-card">
        <p className="test-carousel-text">“{testimonials[index].text}”</p>
        <p className="test-carousel-author">— {testimonials[index].name}</p>
      </div>
    </div>
  );
};
