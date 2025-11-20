import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import egypte from "../assets/images/egypte.png";
import Carousel from "../components/Carousel";

import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";
import "./CarouselTestPage.css";

interface InfoVoyage {
  name: string;
  description: string;
  texts: string[];
  images: string[];
  hotels: Hotel[];
}
interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

// const egypte = "/image/egypte.png";

const CarouselTestPage: React.FC = () => {
  const [showDevis, setShowDevis] = useState(false);
  const [infoVoyage, setInfoVoyage] = useState<InfoVoyage | null>();
  const { id } = useParams();

  const handleOpenDevis = () => {
    setShowDevis(true);
  };

  const handleCloseDevis = () => {
    setShowDevis(false);
  };

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3310/api/destinations/${id}`)
      .then((res) => res.json())
      .then((resData) => setInfoVoyage(resData))
      .catch((err) => console.error("Error fetching destination:", err));
  }, [id]);

  if (!infoVoyage) {
    return <div>Loading destination...</div>;
  }

  return (
    <div className="carouselbody">
      <div className="carousel-page">
        <div className="text-section">
          <h1>
            <img
              src={`/images/${infoVoyage?.name.toLowerCase().replace(/ /g, "-")}.png`}
              className={`flageg destiImage-${infoVoyage?.name}`}
              alt={`${infoVoyage?.name} flag`}
            />
            Discover Exceptional Experiences
          </h1>
          <p>{infoVoyage?.texts?.[0]}</p>
          <p>{infoVoyage?.texts?.[1]}</p>
          <p>{infoVoyage?.texts?.[2]}</p>
        </div>

        <div className="carousel-section">
          {/* <Carousel name={infoVoyage.name} /> */}

          <Carousel images={infoVoyage.images} />
        </div>
      </div>
      <div className={`bottom-text-section btn-text-${infoVoyage?.name}`}>
        <p>{infoVoyage?.texts?.[3]}</p>
      </div>
      <div className="gps-container">
        <Gps />
      </div>
      {infoVoyage && (
        <HotelsCarousel
          hotels={infoVoyage.hotels}
          destinationName={infoVoyage.name}
        />
      )}

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

export default CarouselTestPage;
