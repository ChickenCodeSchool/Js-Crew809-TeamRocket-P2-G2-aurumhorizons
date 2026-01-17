import { useState } from "react";
import "./InspirationPage.css";
import SeasonParticles from "./SeasonParticles";

type Activity = "Relaxation" | "Sport" | "Cultural" | "Exploration";
type Season = "Spring" | "Summer" | "Autumn" | "Winter";

const activities: { name: Activity; image: string }[] = [
  { name: "Relaxation", image: "/imgInspiration/Detente.jpeg" },
  { name: "Sport", image: "/imgInspiration/Sport.jpg" },
  { name: "Cultural", image: "/imgInspiration/Culturel.jpg" },
  { name: "Exploration", image: "/imgInspiration/Exploration.jpg" },
];

const seasons: { name: Season; image: string }[] = [
  { name: "Spring", image: "/imgInspiration/printemps.jpg" },
  { name: "Summer", image: "/imgInspiration/ete.jpg" },
  { name: "Autumn", image: "/imgInspiration/automne.jpg" },
  { name: "Winter", image: "/imgInspiration/hiver.jpg" },
];

// You can keep the destination keys in French if they match your folder names.
// Otherwise I can translate them too.
const suggestions: Record<Activity, Record<Season, string>> = {
  Relaxation: {
    Spring: "Greece",
    Summer: "Bali",
    Autumn: "Italy",
    Winter: "Maldives",
  },
  Sport: {
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
  { name: string; image: string; text: string }[]
> = {
  Grece: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "An incredible trip to Greece, amazing landscapes and local culture!",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "The Aegean Sea is stunning, I loved the sunsets.",
    },
  ],
  Bali: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Bali is magical, with its temples and paradise beaches.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Balinese cuisine is such a great discovery!",
    },
  ],
  Italie: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Rome and Florence feel like open-air museums.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Italian food is absolutely delicious!",
    },
  ],
  Maldives: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "The beaches in the Maldives are pure paradise.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "A perfect relaxing stay, I loved the snorkeling.",
    },
  ],
  Espagne: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Barcelona and Madrid are full of life.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "Spanish tapas are delicious!",
    },
  ],
  CostaRica: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "The Costa Rican jungle is breathtaking.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "A paradise for nature and adventure lovers.",
    },
  ],
  Canada: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Canada’s landscapes are truly spectacular.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "I loved the lakes and forests.",
    },
  ],
  Suisse: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "The Swiss Alps are gorgeous in winter.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "A perfect country for skiing and hiking.",
    },
  ],
  France: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "Paris is such a magical city.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "French cuisine is incomparable.",
    },
  ],
  Japon: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Japan is fascinating, blending tradition and modernity.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "Kyoto and Tokyo are incredible cities.",
    },
  ],
  Egypte: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "The pyramids of Egypt are impressive.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "A journey through ancient history.",
    },
  ],
  Chine: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "The Great Wall is spectacular.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "A country rich in culture and traditions.",
    },
  ],
  Islande: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "Exploring Iceland: geysers, volcanoes, and northern lights.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "A wild and stunning country.",
    },
  ],
  Afrique: [
    {
      name: "Sophie",
      image: "/imgPersonas/Persona1.jpg",
      text: "A safari in Africa is a unique experience.",
    },
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona2.jpg",
      text: "The wildlife and landscapes are incredible.",
    },
  ],
  Perou: [
    {
      name: "Marc",
      image: "/imgPersonas/Persona1.jpg",
      text: "Machu Picchu is a true wonder of the world.",
    },
    {
      name: "Sophie",
      image: "/imgPersonas/Persona2.jpg",
      text: "A country rich in history and traditions.",
    },
  ],
  Norvege: [
    {
      name: "Alexandre",
      image: "/imgPersonas/Persona1.jpg",
      text: "The Norwegian fjords are spectacular.",
    },
    {
      name: "Marc",
      image: "/imgPersonas/Persona2.jpg",
      text: "A perfect destination for nature lovers.",
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

{/* Step 3: destination */}
{step === 3 && destination && (
  <section className="inspiration-step">
    <h2>Destination suggestion</h2>
    <div className="destination-content">
      <p>
        For a <strong>{activity}</strong> trip in{" "}
        <strong>{season}</strong>, we recommend:{" "}
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
