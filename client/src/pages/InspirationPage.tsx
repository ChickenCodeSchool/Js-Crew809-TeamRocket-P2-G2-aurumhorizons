import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./InspirationPage.css";
import SeasonParticles from "./SeasonParticles";

type Activity = "Relaxing" | "Sporty" | "Cultural" | "Exploration";
type Season = "Spring" | "Summer" | "Autumn" | "Winter";

const activities: { name: Activity; image: string }[] = [
  { name: "Relaxing", image: "/imgInspiration/Relaxing.jpeg" },
  { name: "Sporty", image: "/imgInspiration/Sporty.jpg" },
  { name: "Cultural", image: "/imgInspiration/Cultural.jpg" },
  { name: "Exploration", image: "/imgInspiration/Exploration.jpg" },
];

const seasons: { name: Season; image: string }[] = [
  { name: "Spring", image: "/imgInspiration/printemps.jpg" },
  { name: "Summer", image: "/imgInspiration/ete.jpg" },
  { name: "Autumn", image: "/imgInspiration/automne.jpg" },
  { name: "Winter", image: "/imgInspiration/hiver.jpg" },
];

const suggestions: Record<Activity, Record<Season, string>> = {
  Relaxing: {
    Spring: "Greece",
    Summer: "Bali",
    Autumn: "Italy",
    Winter: "Maldives",
  },
  Sporty: {
    Spring: "Spain",
    Summer: "CostaRica",
    Autumn: "Canada",
    Winter: "Switzerland",
  },
  Cultural: {
    Spring: "France",
    Summer: "Japan",
    Autumn: "Egypt",
    Winter: "China",
  },
  Exploration: {
    Spring: "Iceland",
    Summer: "Africa",
    Autumn: "Peru",
    Winter: "Norway",
  },
};

const destinationImages: Record<string, string> = {
  Greece: "/imgDestinations/Grece.jpg",
  Bali: "/imgDestinations/Bali.jpeg",
  Italy: "/imgDestinations/Italie.jpg",
  Maldives: "/imgDestinations/Maldive.jpg",
  Spain: "/imgDestinations/Espagne.jpg",
  CostaRica: "/imgDestinations/CostaRica.jpg",
  Canada: "/imgDestinations/Canada.jpg",
  Switzerland: "/imgDestinations/Suisse.jpg",
  France: "/imgDestinations/France.jpg",
  Japan: "/imgDestinations/Japon.jpg",
  Egypt: "/imgDestinations/Egypte.jpeg",
  China: "/imgDestinations/Chine.jpeg",
  Iceland: "/imgDestinations/Islande.jpg",
  Africa: "/imgDestinations/Afrique.jpg",
  Peru: "/imgDestinations/Perou.jpeg",
  Norway: "/imgDestinations/Norvege.jpeg",
};

const destinationComments: Record<
  string,
  { nameKey: string; image: string; textKey: string }[]
> = {
  Greece: [
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_sophie_greece",
    },
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_alexandre_greece",
    },
  ],
  Bali: [
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_marc_bali",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_bali",
    },
  ],
  Italy: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_italy",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_italy",
    },
  ],
  Maldives: [
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_marc_maldives",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_maldives",
    },
  ],
  Spain: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_spain",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_spain",
    },
  ],
  CostaRica: [
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_sophie_costarica",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_costarica",
    },
  ],
  Canada: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_canada",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_canada",
    },
  ],
  Switzerland: [
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_marc_switzerland",
    },
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_alexandre_switzerland",
    },
  ],
  France: [
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_sophie_france",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_france",
    },
  ],
  Japan: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_japan",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_japan",
    },
  ],
  Egypt: [
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_marc_egypt",
    },
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_alexandre_egypt",
    },
  ],
  China: [
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_sophie_china",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_china",
    },
  ],
  Iceland: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_iceland",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_iceland",
    },
  ],
  Africa: [
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_sophie_africa",
    },
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_alexandre_africa",
    },
  ],
  Peru: [
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_marc_peru",
    },
    {
      nameKey: "persona_sophie",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_sophie_peru",
    },
  ],
  Norway: [
    {
      nameKey: "persona_alexandre",
      image: "/imgPersonas/Persona1.jpg",
      textKey: "persona_alexandre_norway",
    },
    {
      nameKey: "persona_marc",
      image: "/imgPersonas/Persona2.jpg",
      textKey: "persona_marc_norway",
    },
  ],
};

const InspirationPage: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [season, setSeason] = useState<Season | null>(null);

  const destination = activity && season ? suggestions[activity][season] : null;

  const handleBack = () => {
    if (step === 3) setSeason(null);
    if (step === 2) setActivity(null);
    setStep(step - 1);
  };

  return (
    <main className={`inspiration ${season ? season.toLowerCase() : ""}`}>
      {season && <SeasonParticles season={season} />}

      {step > 1 && (
        <div
          className={
            step === 3 ? "back-button-container-step3" : "back-button-container"
          }
        >
          <button type="button" className="back-button" onClick={handleBack}>
            ⬅ {t("inspiration_back")}
          </button>
        </div>
      )}

      {step === 1 && (
        <section className="inspiration-step">
          <h2>{t("inspiration_choose_activity")}</h2>
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
                <span className="button-text">
                  {t(`inspiration_activity_${act.name.toLowerCase()}`)}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="inspiration-step">
          <h2>{t("inspiration_choose_season")}</h2>
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
                <span className="button-text">
                  {t(`inspiration_season_${s.name.toLowerCase()}`)}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && destination && (
        <section className="inspiration-step">
          <h2>{t("inspiration_destination_suggestion")}</h2>
          <div className="destination-content">
            <p>
              {t("inspiration_for_activity_season", {
                activity: t(`inspiration_activity_${activity?.toLowerCase()}`),
                season: t(`inspiration_season_${season?.toLowerCase()}`),
                destination: t(`destination_${destination?.toLowerCase()}`),
              })}
            </p>

            <div className="image-wrapper">
              <img
                src={destinationImages[destination]}
                alt={destination}
                className="destination-image"
              />
            </div>

            <p className="destination-text">
              <em>{t("inspiration_destination_placeholder")}</em>
            </p>

            <div className="personas-grid">
              {(destinationComments[destination] || []).map((p) => (
                <div key={p.nameKey + p.image} className="persona-card">
                  <img
                    src={p.image}
                    alt={t(p.nameKey)}
                    className="persona-image"
                  />
                  <h4 className="persona-name">{t(p.nameKey)}</h4>
                  <p className="persona-comment-text">{t(p.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default InspirationPage;
