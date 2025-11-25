import "./LuxuryCard.css";

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

export const LuxuryCard: React.FC<Props> = ({ title, image, onClick }) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="lux-card" onClick={onClick}>
      <img src={image} className="lux-card-img" alt={title} />

      <div className="lux-card-overlay" />
      <div className="lux-card-content">
        <h3 className="lux-card-title">{title}</h3>
        <button className="lux-card-btn" type="button">
          View Details
        </button>
      </div>
    </div>
  );
};
