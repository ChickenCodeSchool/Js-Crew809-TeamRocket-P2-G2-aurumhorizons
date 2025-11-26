import type React from "react";
import BackButton from "../../components/BackButton";
import ServiceCard from "../../components/ServiceCard";
import "./Services.css";

import LuxurySpa from "../../assets/images/imgService/LuxurySpaSession.jpg";
import PrivateMassage from "../../assets/images/imgService/PrivateMassage.jpg";
import ThermalBath from "../../assets/images/imgService/ThermalBath.jpg";

const RelaxationServices: React.FC = () => {
  const services = [
    {
      title: "Luxury Spa Session",
      price: "Average price: €180 / person",
      image: LuxurySpa,
    },
    {
      title: "Private Massage in Your Suite",
      price: "Average price: €220 / person",
      image: PrivateMassage,
    },
    {
      title: "Thermal Bath Access",
      price: "Average price: €90 / person",
      image: ThermalBath,
    },
  ];

  return (
    <div className="service-wrapper">
      <div className="service-detail-header">
        <BackButton />
        <h1 className="services-title">Relaxation Services</h1>
      </div>

      <p className="service-desc">
        Premium wellness and relaxation experiences designed for total comfort.
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

export default RelaxationServices;
