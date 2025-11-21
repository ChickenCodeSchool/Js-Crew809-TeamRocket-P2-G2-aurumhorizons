import "./Panneau.css";
import type L from "leaflet";
import type { RefObject } from "react";
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
  if (!intermaps) {
    return (
      <section className="body">
        <p>Chargement...</p>
      </section>
    );
  }
  return (
    <>
      <section className="body">
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef1)}>
          <p className="jours">Jour {intermaps?.locations[0].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[0].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[0].description}</p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef2)}>
          <p className="jours">Jour {intermaps?.locations[1].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[1].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[1].description}</p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef3)}>
          <p className="jours">Jour {intermaps?.locations[2].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[2].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[2].description}</p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef4)}>
          <p className="jours">Jour {intermaps?.locations[3].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[3].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[3].description}</p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef5)}>
          <p className="jours">Jour {intermaps?.locations[4].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[4].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[4].description}</p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef6)}>
          <p className="jours">Jour {intermaps?.locations[5].day}</p>
          <h2 id="panneautitre">{intermaps?.locations[5].lieu}</h2>
          <p className="paragraphe">{intermaps?.locations[5].description}</p>
        </article>
      </section>
    </>
  );
}

export default Panneau;
