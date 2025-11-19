import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import egypte from "../assets/images/egypte.png";
// import Carousel from "../components/Carousel";

import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";
import "./CarouselTestPage.css";

interface InfoVoyage {
  name: string;
  description: string;
}

const egypte = "/image/egypte.png";

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
    fetch(`http://localhost:3310/api/destinations/${id}`)
      .then((res) => res.json())
      .then((resData) => setInfoVoyage(resData));
  }, [id]);

  return (
    <div className="carouselbody">
      <div className="carousel-page">
        <div className="text-section">
          <h1>
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <img
              src={egypte}
              className={`flageg  destiImage-${infoVoyage?.name}`}
            />{" "}
            Discover Exceptional Experiences
          </h1>
          <p>{infoVoyage?.description}</p>
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
          {/* <Carousel name={infoVoyage.name} /> */}

          {/* <Carousel destinationName="Egypt" /> */}
        </div>
      </div>
      <div className={`bottom-text-section btn-text-${infoVoyage?.name}`}>
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
