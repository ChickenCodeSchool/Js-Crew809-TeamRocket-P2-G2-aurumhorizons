import { useState } from "react";
import "./InspirationPage.css";

const activities = ["Détente", "Sportive", "Culturel", "Exploration"] as const;
const seasons = ["Printemps", "Été", "Automne", "Hiver"] as const;

type Activity = (typeof activities)[number];
type Season = (typeof seasons)[number];

const suggestions: Record<Activity, Record<Season, string>> = {
  Détente: {
    Printemps: "Grèce",
    Été: "Bali",
    Automne: "Italie",
    Hiver: "Maldives",
  },
  Sportive: {
    Printemps: "Espagne",
    Été: "Costa Rica",
    Automne: "Canada",
    Hiver: "Suisse",
  },
  Culturel: {
    Printemps: "France",
    Été: "Japon",
    Automne: "Égypte",
    Hiver: "Inde",
  },
  Exploration: {
    Printemps: "Islande",
    Été: "Afrique du Sud",
    Automne: "Pérou",
    Hiver: "Norvège",
  },
};

const InspirationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [season, setSeason] = useState<Season | null>(null);

  const handleActivity = (choice: Activity) => {
    setActivity(choice);
    setStep(2);
  };

  const handleSeason = (choice: Season) => {
    setSeason(choice);
    setStep(3);
  };

  return (
    <main className="inspiration">
      {step === 1 && (
        <section className="inspiration-step">
          <h2>Choisis ton style de voyage</h2>
          <div className="choices">
            {activities.map((act) => (
              <button
                key={act}
                type="button"
                onClick={() => handleActivity(act)}
              >
                {act}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="inspiration-step">
          <h2>Choisis ta saison</h2>
          <div className="choices">
            {seasons.map((s) => (
              <button key={s} type="button" onClick={() => handleSeason(s)}>
                {s}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && activity && season && (
        <section className="inspiration-step">
          <h2>Proposition de destination</h2>
          <p>
            Pour un voyage <strong>{activity}</strong> en{" "}
            <strong>{season}</strong>, nous te conseillons :
            <strong> {suggestions[activity][season]}</strong>.
          </p>
        </section>
      )}
    </main>
  );
};

export default InspirationPage;
