import { LuxuryCard } from "../components/LuxuryCard";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import "./Service.css";
import { useNavigate } from "react-router-dom";

import ExclusiveEvents from "../assets/images/imgService/ExclusiveEvents.jpg";
import PrivateTransportation from "../assets/images/imgService/PrivateTransportation.jpg";
import TailoredExpriences from "../assets/images/imgService/TailoredExperiences.jpg";
import Wellness from "../assets/images/imgService/Wellness.jpg";

const Service: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <section className="service-intro">
        <h2 className="service-title">Discover Our Exclusive Services</h2>
        <p className="service-text">
          Our premium concierge service ensures that every detail of your
          journey is handled with excellence. From relaxation and private
          transport to tailored experiences and exclusive events, we bring
          luxury to life.
        </p>
      </section>

      <section className="service-grid">
        <LuxuryCard
          title="Relaxation"
          image={Wellness}
          onClick={() => navigate("/services/relaxation")}
        />
        <LuxuryCard
          title="Private Transport"
          image={PrivateTransportation}
          onClick={() => navigate("/services/private-transport")}
        />
        <LuxuryCard
          title="Tailored Experiences"
          image={TailoredExpriences}
          onClick={() => navigate("/services/tailored-experiences")}
        />
        <LuxuryCard
          title="Exclusive Events"
          image={ExclusiveEvents}
          onClick={() => navigate("/services/exclusive-events")}
        />
      </section>

      <div className="service-contact">
        <button
          className="luxury-btn"
          onClick={() => navigate("/contact")}
          type="button"
        >
          Contact Us
        </button>
      </div>

      <TestimonialsCarousel />
    </div>
  );
};

export default Service;
