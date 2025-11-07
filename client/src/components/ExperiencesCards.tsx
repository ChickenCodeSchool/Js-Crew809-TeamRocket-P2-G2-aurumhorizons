import "./ExperiencesCards.css";

interface ExperiencesCardsProps {
  name: string;
  image: string;
  continent: string;
  average_price: string;
  tourist_season: string;
}

const ExperiencesCards: React.FC<ExperiencesCardsProps> = ({
  name,
  image,
  continent,
  average_price,
  tourist_season,
}) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-img" />

      <div className="destination-banner">
        <h3 className="destination-name">{name}</h3>
        <div className="destination-infos">
          <p>{continent}</p>
          <p>{average_price} € (avg)</p>
          <p>Best season: {tourist_season}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCards;
