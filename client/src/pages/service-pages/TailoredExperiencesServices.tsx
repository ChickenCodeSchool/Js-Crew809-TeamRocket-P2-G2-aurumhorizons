import type React from "react";
import BackButton from "../../components/BackButton";
import ServiceCard from "../../components/ServiceCard";
import "./Services.css";

import CustomExcursion from "../../assets/images/imgService/CustomExcursion.jpg";
import PrivateGuide from "../../assets/images/imgService/PrivateGuide.jpg";
import VIPGastronomic from "../../assets/images/imgService/VIPGastronomic.jpg";

const TailoredExperiencesServices: React.FC = () => {
  const services = [
    {
      title: "Private Guided Tour",
      price: "Average price: €250 / person",
      image: PrivateGuide,
    },
    {
      title: "Custom Excursion",
      price: "Average price: €400 / person",
      image: CustomExcursion,
    },
    {
      title: "VIP Gastronomic Experience",
      price: "Average price: €320 / person",
      image: VIPGastronomic,
    },
  ];

  return (
    <div className="service-wrapper">
      <div className="service-detail-header">
        <BackButton />
        <h1 className="service-title">Tailored Experiences</h1>
      </div>

      <p className="service-desc">
        Personalized activities created exclusively for your preferences.
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

export default TailoredExperiencesServices;
