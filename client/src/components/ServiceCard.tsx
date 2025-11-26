import type React from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  price: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, image }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-img" />

      <div className="service-card-overlay" />

      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-price">{price}</p>
        <button
          className="service-card-btn"
          type="button"
          onClick={() => setShowBooking(true)}
        >
          Book Now
        </button>
      </div>

      {showBooking && (
        <BookingModal
          serviceName={title}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
};

export default ServiceCard;
