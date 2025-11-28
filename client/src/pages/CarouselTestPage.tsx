import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import Carousel from "../components/Carousel";
import CommentsSection from "../components/CommentSection";
import Devis from "../components/Devis";
import Gps from "../components/Gps";
import HotelsCarousel from "../components/HotelsCarousel";

import "./CarouselTestPage.css";

interface InfoVoyage {
  name: string;
  description: string;
  images: string[];
  hotels: Hotel[];
}

interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

interface Day {
  title: string;
  description: string;
}

const CarouselTestPage: React.FC = () => {
  const { t } = useTranslation();
  const [showDevis, setShowDevis] = useState(false);
  const [infoVoyage, setInfoVoyage] = useState<InfoVoyage | null>(null);
  const { id } = useParams<{ id: string }>();

  const handleOpenDevis = () => setShowDevis(true);
  const handleCloseDevis = () => setShowDevis(false);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3310/api/destinations/${id}`)
      .then((res) => res.json())
      .then((resData) => setInfoVoyage(resData))
      .catch((err) => console.error("Error fetching destination:", err));
  }, [id]);

  if (!infoVoyage) {
    return <div>{t("loading_destination")}</div>;
  }

  const voyageKey = `voyage${id}`;

  // Slides (description générale)
  const slidesRaw = t(`${voyageKey}.texts`, { returnObjects: true });
  const slides: string[] = Array.isArray(slidesRaw) ? slidesRaw : [];
  const title = t(`${voyageKey}.title`);

  const daysRaw = t(`${voyageKey}.days`, { returnObjects: true });
  const days: Day[] = Array.isArray(daysRaw) ? daysRaw : [];

  return (
    <div className="carouselbody">
      <div className="carousel-page">
        <div className="text-section">
          <h1>
            <img
              src={`/images/${infoVoyage.name.toLowerCase().replace(/ /g, "-")}.png`}
              className={`flageg destiImage-${infoVoyage.name}`}
              alt={`${infoVoyage.name} ${t("flag")}`}
            />
            {t("discover_experiences")}
          </h1>

          <h2>{title}</h2>
          {slides.length > 0 ? (
            slides.map((text) => (
              <p key={`${voyageKey}-${text.slice(0, 30)}`}>{text}</p>
            ))
          ) : (
            <p>{t("no_text_available")}</p>
          )}
        </div>

        <div className="carousel-section">
          <Carousel images={infoVoyage.images} />
        </div>

        {days.length > 0 && (
          <aside className="itinerary-container">
            {days.map((day) => (
              <div key={day.title} className="day-card">
                <h4>{day.title}</h4>
                <p>{day.description}</p>
              </div>
            ))}
          </aside>
        )}
      </div>

      {slides[3] && (
        <div className={`bottom-text-section btn-text-${infoVoyage.name}`}>
          <p>{slides[3]}</p>
        </div>
      )}

      <div className="gps-container">
        <Gps cityId={id} />
      </div>

      {infoVoyage.hotels && (
        <HotelsCarousel
          hotels={infoVoyage.hotels}
          destinationName={infoVoyage.name}
        />
      )}

      <div className="containerbutton">
        <button type="button" className="devisbutton" onClick={handleOpenDevis}>
          {t("request_quote")}
        </button>
      </div>

      <CommentsSection />

      <Devis onClose={handleCloseDevis} isOpen={showDevis} />
    </div>
  );
};

export default CarouselTestPage;
