import { useState } from "react";
import "./InspirationPage.css";
import SeasonParticles from "./SeasonParticles";

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
  Perou: "/imgDestinations/Perou.jpeg",
  Norvege: "/imgDestinations/Norvege.jpeg",
};

const destinationComments: Record<
  string,
  { name: string; image: string; text: string }[]
> = {
  Grece: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "Un voyage incroyable en Grèce, paysages et culture locale au top !",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "La mer Égée est splendide, j’ai adoré les couchers de soleil.",
    },
  ],
  Bali: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Bali est magique, entre temples et plages paradisiaques.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "La gastronomie balinaise est une vraie découverte !",
    },
  ],
  Italie: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Rome et Florence, un vrai musée à ciel ouvert.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "La cuisine italienne est un régal !",
    },
  ],
  Maldives: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Les plages des Maldives sont paradisiaques.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un séjour détente parfait, j’ai adoré le snorkeling.",
    },
  ],
  Espagne: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Barcelone et Madrid, deux villes pleines de vie.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Les tapas espagnols sont délicieux !",
    },
  ],
  CostaRica: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "La jungle du Costa Rica est impressionnante.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un paradis pour les amateurs de nature et d’aventure.",
    },
  ],
  Canada: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Les paysages du Canada sont grandioses.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "J’ai adoré les lacs et les forêts.",
    },
  ],
  Suisse: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Les Alpes suisses sont magnifiques en hiver.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un pays parfait pour le ski et la randonnée.",
    },
  ],
  France: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "Paris est une ville magique.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "La gastronomie française est incomparable.",
    },
  ],
  Japon: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Le Japon est fascinant, entre tradition et modernité.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Kyoto et Tokyo sont des villes incroyables.",
    },
  ],
  Egypte: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Les pyramides d’Égypte sont impressionnantes.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un voyage dans l’histoire antique.",
    },
  ],
  Chine: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "La Grande Muraille est spectaculaire.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un pays riche en culture et traditions.",
    },
  ],
  Islande: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Exploration en Islande : geysers, volcans et aurores boréales.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un pays sauvage et magnifique.",
    },
  ],
  Afrique: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "Un safari en Afrique est une expérience unique.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "La faune et la flore sont incroyables.",
    },
  ],
  Perou: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Le Machu Picchu est une merveille du monde.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un pays riche en histoire et traditions.",
    },
  ],
  Norvege: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Les fjords norvégiens sont spectaculaires.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Un pays parfait pour les amoureux de nature.",
    },
  ],
};

const InspirationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [season, setSeason] = useState<Season | null>(null);

  const destination = activity && season ? suggestions[activity][season] : null;

  const handleBack = () => {
    if (step === 3) setSeason(null); // reset la saison si on revient de l'étape 3
    if (step === 2) setActivity(null); // reset l'activité si on revient de l'étape 2
    setStep(step - 1);
  };

  return (
    <main className={`inspiration ${season?.toLowerCase() || ""}`}>
      {/* Animation saison */}
      <SeasonParticles season={season} />

      {/* Bouton retour global */}
      {step > 1 && (
        <div
          className={
            step === 3 ? "back-button-container-step3" : "back-button-container"
          }
        >
          <button type="button" className="back-button" onClick={handleBack}>
            ⬅ Back
          </button>
        </div>
      )}

      {/* Étape 1 : choix activité */}
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

      {/* Étape 2 : choix saison */}
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

      {/* Étape 3 : destination */}
      {step === 3 && destination && (
        <section className="inspiration-step">
          <h2>Destination suggestion</h2>
          <div className="destination-content">
            <p>
              Pour un voyage <strong>{activity}</strong> en{" "}
              <strong>{season}</strong>, nous te conseillons :{" "}
              <strong>{destination}</strong>.
            </p>

            <div className="image-wrapper">
              <img
                src={destinationImages[destination]}
                alt={destination}
                className="destination-image"
              />
            </div>

            <p className="destination-text">
              <em>Lorem Ipsum is simply dummy text…</em>
            </p>

            <div className="personas-grid">
              {(destinationComments[destination] || []).map((p) => (
                <div key={p.name + p.image} className="persona-card">
                  <img src={p.image} alt={p.name} className="persona-image" />
                  <h4 className="persona-name">{p.name}</h4>
                  <p className="persona-comment-text">{p.text}</p>
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
