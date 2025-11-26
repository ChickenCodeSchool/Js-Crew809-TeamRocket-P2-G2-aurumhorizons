// import hook react
import { useEffect, useState } from "react";
import { useEffect as useEffectType } from "react";
import "./DarkMods.css";

// Composant Toggle pour changer le thème clair/sombre en gros il y a deux valeurs "light" et "dark"
function DarkMods() {
  type Theme = "light" | "dark";
  const STORAGE_KEY = "theme";

  // lire le stockage local si un thème est déjà défini si oui light ou dark sinon let's go pour null
  const getStoredTheme = (): Theme | null => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  };

  // on demande si le user a un theme enregistre sinon on check son systeme
  const getInitialTheme = (): Theme => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // theme = valeur actuelle , setTheme = fonction pour la mettre a jour
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isFlying, setIsFlying] = useState(false);

  // applique & sauvegarde le thème
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // lie avec le css via l'attribut data-theme
    document.querySelector("leafletmap")?.classList.add("darkmap");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // écoute changement du système (si pas de préférence enregistrée)
  useEffectType(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Gestion du clic avec animation
  const handleClick = () => {
    setIsFlying(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setTimeout(() => setIsFlying(false), 2000);
    }, 800);
  };

  // et voici le bouton qui change le thème au clic
  return (
    <button
      type="button"
      className={
        isFlying
          ? "theme-DarkMods flying btnTheme"
          : "theme-DarkMods notFlying btnTheme"
      }
      aria-pressed={theme === "dark"}
      aria-label="Basculer le thème"
      onClick={handleClick}
      disabled={isFlying}
      style={{
        overflow: "hidden",
        borderRadius: "2rem",
        width: "10rem",
        height: "3rem",
        background:
          theme === "dark"
            ? "linear-gradient(to right, #4e46e5, #8c52f0ff)"
            : "linear-gradient(to right, #3b82f6, #06b6d4)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        border: "none",
        cursor: isFlying ? "not-allowed" : "pointer",
        color: theme === "dark" ? "black" : "white",
        transition: "color 0.3s linear",
      }}
    >
      <span className="plane">✈</span>
    </button>
  );
}

export default DarkMods;
