import { useEffect } from "react";
import LightRays from "./LightRays";
import "./LightRays.css";

type Season = "Spring" | "Summer" | "Autumn" | "Winter" | null;

const SeasonParticles = ({ season }: { season: Season }) => {
  // Effets pour les saisons avec particules
  useEffect(() => {
    if (!season || season === "Summer") return;

    const container = document.createElement("div");
    container.id = "particles-container";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "0";
    document.body.appendChild(container);

    const particleImages: Record<string, string> = {
      Winter: "/imgParticles/flocons.png",
      Autumn: "/imgParticles/feuilles.png",
      Spring: "/imgParticles/petales.png",
    };

    const createParticle = () => {
      const particle = document.createElement("img");
      particle.src = particleImages[season];

      particle.style.position = "absolute";

      let top = -50;
      let left = Math.random() * window.innerWidth;

      const size =
        season === "Spring" ? 20 + Math.random() * 20 : 10 + Math.random() * 20;

      particle.style.top = `${top}px`;
      particle.style.left = `${left}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${0.5 + Math.random() * 0.5}`;

      container.appendChild(particle);

      const speed = 0.3 + Math.random() * 0.6;
      const sway = Math.random() * 0.08;

      const fall = () => {
        top += speed;
        left += Math.sin(top / 80) * sway * 3;
        particle.style.top = `${top}px`;
        particle.style.left = `${left}px`;
        particle.style.transform = `rotate(${top / 8}deg)`;

        if (top > window.innerHeight) {
          particle.remove();
          return;
        }

        requestAnimationFrame(fall);
      };

      fall();
    };

    const interval = setInterval(createParticle, 200);

    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, [season]);

  return (
    <>
      {season === "Summer" && (
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffd166"
          raysSpeed={2}
          lightSpread={0.7}
          rayLength={1.5}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.15}
          distortion={0.07}
          className="sun-rays"
        />
      )}

      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default SeasonParticles;
