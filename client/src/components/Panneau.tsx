import "./Panneau.css";
import type L from "leaflet";
import type { RefObject } from "react";
import { useTranslation } from "react-i18next";
import type { Intermaps } from "./Gps";

interface PanneauProps {
  intermaps: Intermaps | null;
  openPopup1: (ref: RefObject<L.Marker | null>) => void;
  myRef1: RefObject<L.Marker | null>;
  myRef2: RefObject<L.Marker | null>;
  myRef3: RefObject<L.Marker | null>;
  myRef4: RefObject<L.Marker | null>;
  myRef5: RefObject<L.Marker | null>;
  myRef6: RefObject<L.Marker | null>;
}

function Panneau({
  intermaps,
  openPopup1,
  myRef1,
  myRef2,
  myRef3,
  myRef4,
  myRef5,
  myRef6,
}: PanneauProps) {
  const { t } = useTranslation();

  if (!intermaps) {
    return (
      <section className="body">
        <p>{t("loading")}</p>
      </section>
    );
  }

  const locations = [
    { ref: myRef1, data: intermaps.locations[0] },
    { ref: myRef2, data: intermaps.locations[1] },
    { ref: myRef3, data: intermaps.locations[2] },
    { ref: myRef4, data: intermaps.locations[3] },
    { ref: myRef5, data: intermaps.locations[4] },
    { ref: myRef6, data: intermaps.locations[5] },
  ];

  return (
    <section className="body">
      {locations.map((loc) => (
        <article key={loc.data.lieu}>
          <button
            type="button"
            className="popup-trigger"
            onMouseOver={() => openPopup1(loc.ref)}
            onFocus={() => openPopup1(loc.ref)}
          >
            <p className="jours">
              {t("day")} {loc.data.day}
            </p>
            <h2 id="panneautitre">{t(loc.data.lieu)}</h2>
            <p className="paragraphe">{t(loc.data.description)}</p>
          </button>
        </article>
      ))}
    </section>
  );
}

export default Panneau;
