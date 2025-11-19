import type React from "react";
import { useState } from "react";
import imgIndonesia from "../assets/images/imgIndonesia/indonesia.FLag.png";
import img3 from "../assets/images/imgIndonesia/indonesia2.jpg";
import img2 from "../assets/images/imgIndonesia/indonesia3.jpg";
import img1 from "../assets/images/imgIndonesia/indonesia4.jpg";
import img4 from "../assets/images/imgIndonesia/indonesia14.jpg";
import Carousel from "../components/Carousel";
import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";
import "./CarouselTestPage.css";

const egyptImages: string[] = [img1, img2, img3, img4];

const IndonesieTestPage: React.FC = () => {
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
            <img src={imgIndonesia} className="flageg" /> Discover Exceptional
            Experiences
          </h1>
          <p>
            Indonesia is a fascinating country made up of over 17,000 islands,
            stretching between Southeast Asia and Oceania. From Bali to Sumatra,
            through Java and Borneo, each island has its own culture,
            traditions, and unique landscapes.
          </p>
          <p>
            This vast archipelago is known for its exceptional biodiversity,
            majestic volcanoes, paradise beaches, and ancient temples. Indonesia
            is also home to hundreds of languages and ethnic groups, making it
            one of the most culturally rich countries in the world.
          </p>
          <p>
            Traveling through Indonesia means diving into a mosaic of flavors,
            colors, and spirituality. Whether exploring the terraced rice fields
            of Ubud or the underwater wonders of Raja Ampat, every experience is
            an invitation to discovery.
          </p>
        </div>

        <div className="carousel-section">
          <Carousel images={egyptImages} />
        </div>
      </div>
      <div className="bottom-text-section">
        <p>
          Embark on an adventure where every moment has been thoughtfully
          designed to awaken your senses and create unforgettable memories. From
          the golden beaches of Bali to the crystal-clear waters of Komodo, and
          the smoking volcanoes of Java, each landscape invites you to explore a
          world where nature, culture, and refinement blend in perfect harmony.
          Picture yourself waking up to the song of tropical birds, overlooking
          sunlit terraced rice fields, before heading off on a private excursion
          through ancient temples. As evening falls, indulge in a cuisine
          bursting with flavor — a true reflection of the diversity and richness
          of this thousand-island archipelago.
        </p>
      </div>
      <div>
        <Gps />
      </div>
      <HotelsCarousel />
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

export default IndonesieTestPage;
