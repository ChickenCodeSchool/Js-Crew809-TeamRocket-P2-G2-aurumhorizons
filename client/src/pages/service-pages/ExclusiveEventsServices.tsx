import type React from "react";
import BackButton from "../../components/BackButton";
import ServiceCard from "../../components/ServiceCard";
import "./Services.css";

import VIPEventAccess from "../../assets/images/imgService/VIPEventAccess.jpg";
import WineTasting from "../../assets/images/imgService/WineTasting.jpg";
import YachtParty from "../../assets/images/imgService/YachtParty.jpg";

const ExclusiveEventsServices: React.FC = () => {
  const services = [
    {
      title: "Private Yacht Party",
      price: "Average price: €850 / person",
      image: YachtParty,
    },
    {
      title: "Exclusive Wine Tasting",
      price: "Average price: €260 / person",
      image: WineTasting,
    },
    {
      title: "VIP Event Access",
      price: "Average price: €800 / person",
      image: VIPEventAccess,
    },
  ];

  return (
    <div className="service-wrapper">
      <div className="service-detail-header">
        <BackButton />
        <h1 className="services-title">Exclusive Events</h1>
      </div>

      <p className="service-desc">
        Access private and unforgettable experiences designed exclusively for
        you.
      </p>

      <div className="service-list">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveEventsServices;
