import { useState } from "react";
import "./InspirationPage.css";

type Activity = "Detente" | "Sportive" | "Culturel" | "Exploration";
type Season = "Spring" | "Summer" | "Autumn" | "Winter";

const activities: { name: Activity; image: string }[] = [
  { name: "Detente", image: "/imgInspiration/Detente.jpeg" },
  { name: "Sportive", image: "/imgInspiration/Sport.jpg" },
  { name: "Culturel", image: "/imgInspiration/Culturel.jpg" },
  { name: "Exploration", image: "/imgInspiration/Exploration.jpg" },
];

const seasons: { name: Season; image: string }[] = [
  { name: "Spring", image: "/imgInspiration/printemps.jpg" },
  { name: "Summer", image: "/imgInspiration/ete.jpg" },
  { name: "Autumn", image: "/imgInspiration/automne.jpg" },
  { name: "Winter", image: "/imgInspiration/hiver.jpg" },
];

const suggestions: Record<Activity, Record<Season, string>> = {
  Detente: {
    Spring: "Grece",
    Summer: "Bali",
    Autumn: "Italie",
    Winter: "Maldives",
  },
  Sportive: {
    Spring: "Espagne",
    Summer: "CostaRica",
    Autumn: "Canada",
    Winter: "Suisse",
  },
  Culturel: {
    Spring: "France",
    Summer: "Japon",
    Autumn: "Egypte",
    Winter: "Chine",
  },
  Exploration: {
    Spring: "Islande",
    Summer: "Afrique",
    Autumn: "Perou",
    Winter: "Norvege",
  },
};

const destinationImages: Record<string, string> = {
  Grece: "/imgDestinations/Grece.jpg",
  Bali: "/imgDestinations/Bali.jpeg",
  Italie: "/imgDestinations/Italie.jpg",
  Maldives: "/imgDestinations/Maldive.jpg",
  Espagne: "/imgDestinations/Espagne.jpg",
  CostaRica: "/imgDestinations/CostaRica.jpg",
  Canada: "/imgDestinations/Canada.jpg",
  Suisse: "/imgDestinations/Suisse.jpg",
  France: "/imgDestinations/France.jpg",
  Japon: "/imgDestinations/Japon.jpg",
  Egypte: "/imgDestinations/Egypte.jpeg",
  Chine: "/imgDestinations/Chine.jpeg",
  Islande: "/imgDestinations/Islande.jpg",
  Afrique: "/imgDestinations/Afrique.jpg",
  Pérou: "/imgDestinations/Perou.jpeg",
  Norvège: "/imgDestinations/Norvege.jpeg",
};

const InspirationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [season, setSeason] = useState<Season | null>(null);

  return (
    <main className="inspiration">
      {/* Bouton retour global */}
      {step > 1 && (
        <div className="back-button-container">
          <button
            type="button"
            className="back-button"
            onClick={() => setStep(step - 1)}
          >
            ⬅ Back
          </button>
        </div>
      )}

      {/* Étape 1 */}
      {step === 1 && (
        <section className="inspiration-step">
          <h2>Choose your travel style</h2>
          <div className="choices">
            {activities.map((act) => (
              <button
                key={act.name}
                type="button"
                onClick={() => {
                  setActivity(act.name);
                  setStep(2);
                }}
                style={{ backgroundImage: `url(${act.image})` }}
              >
                <span className="button-text">{act.name}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Étape 2 */}
      {step === 2 && (
        <section className="inspiration-step">
          <h2>Choose your season</h2>
          <div className="choices">
            {seasons.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => {
                  setSeason(s.name);
                  setStep(3);
                }}
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <span className="button-text">{s.name}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Étape 3 */}
      {step === 3 && activity && season && (
        <section className="inspiration-step">
          <h2>Destination suggestion</h2>
          <div className="destination-content">
            <p>
              Pour un voyage <strong>{activity}</strong> en{" "}
              <strong>{season}</strong>, nous te conseillons :
              <strong> {suggestions[activity][season]}</strong>.
            </p>

            <img
              src={destinationImages[suggestions[activity][season]]}
              alt={suggestions[activity][season]}
              className="destination-image"
            />

            <p className="destination-text">
              <em>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry…
              </em>
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default InspirationPage;
