import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./ExperiencesCards.css";

interface ExperiencesCardsProps {
  name: string;
  image: string;
  continent: string;
  average_price: string;
  tourist_season: string;
}

interface Destination {
  name: string;
  link: string;
}

const destinations: Destination[] = [
  { name: "Indonesia", link: "/voyage/1" },
  { name: "Egypt", link: "/voyage/2" },
  { name: "Maldives", link: "/voyage/3" },
  { name: "Philippines", link: "/voyage/4" },
  { name: "Seychelles", link: "/voyage/5" },
  { name: "Iceland", link: "/voyage/6" },
  { name: "Japan", link: "/voyage/7" },
  { name: "Italy", link: "/voyage/8" },
  { name: "Costa Rica", link: "/voyage/9" },
  { name: "Greece", link: "/voyage/10" },
  { name: "Peru", link: "/voyage/11" },
  { name: "Morocco", link: "/voyage/12" },
  { name: "Australia", link: "/voyage/13" },
  { name: "Canada", link: "/voyage/14" },
  { name: "Thailand", link: "/voyage/15" },
  { name: "New Zealand", link: "/voyage/16" },
];

const ExperiencesCards: React.FC<ExperiencesCardsProps> = ({
  name,
  image,
  continent,
  average_price,
  tourist_season,
}) => {
  const { t } = useTranslation();
  const destinationTrouvee = destinations.find((d) => d.name === name);
  const lien = destinationTrouvee ? destinationTrouvee.link : "#";

  return (
    <Link to={lien} className="destination-card-link">
      <div className="destination-card">
        <img src={image} alt={name} className="destination-img" />

        <div className="destination-banner">
          <h3 className="destination-name">{name}</h3>
          <div className="destination-infos">
            <p>{continent}</p>
            <p>
              {average_price} € ({t("experiences_avg")})
            </p>
            <p>
              {t("experiences_best_season")}: {tourist_season}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperiencesCards;
