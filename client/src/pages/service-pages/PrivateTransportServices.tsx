import type React from "react";
import BackButton from "../../components/BackButton";
import ServiceCard from "../../components/ServiceCard";
import "./Services.css";

import AirportTransfer from "../../assets/images/imgService/AirportTransfer.jpg";
import LuxuryCar from "../../assets/images/imgService/LuxuryCar.jpg";
import PrivateDriver from "../../assets/images/imgService/PrivateDriver.jpg";

const PrivateTransportServices: React.FC = () => {
  const services = [
    {
      title: "Private Driver",
      price: "Average price: €160 / hour",
      image: PrivateDriver,
    },
    {
      title: "Luxury Car Rental",
      price: "Average price: €350 / day",
      image: LuxuryCar,
    },
    {
      title: "Airport Transfer",
      price: "Average price: €120 / person",
      image: AirportTransfer,
    },
  ];

  return (
    <div className="service-wrapper">
      <div className="service-detail-header">
        <BackButton />
        <h1 className="service-title">Private Transport</h1>
      </div>

      <p className="service-desc">
        Travel in comfort and discretion with our private transportation
        services.
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

export default PrivateTransportServices;
