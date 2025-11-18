import type React from "react";
import { useState } from "react";
import Carousel from "../components/Carousel";
import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";
import "./CarouselTestPage.css";

const egyptImages: string[] = [
  "/image/egypt-1.jpg",
  "/image/egypt-2.jpg",
  "/image/egypt-3.jpg",
  "/image/egypt-4.jpg"
];
const egypte = "/image/egypte.png";

const CarouselTestPage: React.FC = () => {
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
        <div className="text-section">
          <h1>
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <img src={egypte} className="flageg" /> Discover Exceptional
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
      <div className="bottom-text-section">
        <p>
          Embark on a journey where every detail has been meticulously crafted
          to create unforgettable memories. From the golden sands of Egypt's
          deserts to the serene waters of the Nile, each moment invites you to
          explore history, culture, and luxury in perfect harmony. Imagine
          waking up to the warm glow of the sunrise over ancient temples,
          enjoying private guided tours through timeless monuments, and
          indulging in exquisite cuisine that reflects the richness of the land.
        </p>
      </div>
      <div>
        <Gps />
      </div>
      <HotelsCarousel destinationName="Egypt" />
      <div className="containerbutton">
        <button type="button" className="devisbutton" onClick={handleOpenDevis}>
          {" "}
          demander devis{" "}
        </button>
      </div>
      <CommentsSection />

      <Devis onClose={handleCloseDevis} isOpen={showDevis} />
    </div>
  );
};

export default CarouselTestPage;
