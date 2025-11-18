import type React from "react";
import { useState } from "react";
import Philippines from "../assets/images/PhFlag.png";
import img1 from "../assets/images/egypt-1.jpg";
import img2 from "../assets/images/egypt-2.jpg";
import img3 from "../assets/images/egypt-3.jpg";
import img4 from "../assets/images/egypt-4.jpg";
import Carousel from "../components/Carousel";
import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";
import "./PhilippinesPage.css";

const egyptImages: string[] = [img1, img2, img3, img4];

const PhilippinesPage: React.FC = () => {
  const [showDevis, setShowDevis] = useState(false);

  const handleOpenDevis = () => {
    setShowDevis(true);
  };

  const handleCloseDevis = () => {
    setShowDevis(false);
  };

  return (
    <div className="carouselbody">
      <div className="carousel-page">
        <div className="text-sectionPh">
          <h1>
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <img src={Philippines} className="flagPh" /> Discover Exceptional
            Experiences
          </h1>
          <p>
            Explore unique destinations and carefully curated activities
            designed for discerning travelers. Every journey is crafted to offer
            the perfect balance of comfort, refinement, and discovery. Immerse
            yourself in majestic landscapes, iconic historical sites, and
            exclusive experiences created to delight your senses and leave
            lasting memories.
          </p>
          <p>
            Whether you dream of luxurious safaris in pristine reserves,
            intimate cruises along the Nile, or private visits to world-renowned
            monuments, our tailor-made trips are designed to exceed your highest
            expectations. Enjoy exceptional accommodations, personalized
            services, and experiences that go beyond the ordinary.
          </p>
          <p>
            Every detail of your journey is orchestrated to create unique and
            memorable moments, combining elegance, authenticity, and comfort.
            Discover the world in a new way, with attentive guidance and
            experiences crafted to inspire and amaze.
          </p>
        </div>

        <div className="carousel-section">
          <Carousel images={egyptImages} />
        </div>
      </div>
      <div className="bottom-text-section-Philippines">
        <p>
          Embark on a journey where every detail has been meticulously crafted
          to create unforgettable memories. From the pristine white sands of
          Palawan to the emerald green rice terraces of Banaue, each moment
          invites you to explore nature, adventure, and paradise in perfect
          harmony. Imagine waking up to the gentle sound of waves lapping
          against the shore, enjoying private island-hopping excursions through
          towering limestone cliffs, and indulging in fresh, tropical cuisine
          that captures the vibrant spirit of the archipelago.
        </p>
      </div>
      <div>
        <Gps />
      </div>
      <HotelsCarousel />
      <div className="containerbutton">
        <button type="button" className="devisbutton" onClick={handleOpenDevis}>
          {" "}
          Request a quote{" "}
        </button>
      </div>
      <CommentsSection />

      <Devis onClose={handleCloseDevis} isOpen={showDevis} />
    </div>
  );
};

export default PhilippinesPage;
