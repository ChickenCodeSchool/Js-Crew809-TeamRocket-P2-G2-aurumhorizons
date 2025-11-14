import type L from "leaflet";
import { useRef } from "react";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Map from "../components/Map.tsx";
import Panneau from "../components/Panneau.tsx";
import "leaflet/dist/leaflet.css";
import "./PageTest.css";

function PageTest() {
  const arcdetriompheRef = useRef<L.Marker | null>(null);
  const toureiffelRef = useRef<L.Marker | null>(null);
  const republiqueRef = useRef<L.Marker | null>(null);
  const PlacedelaConcordeRef = useRef<L.Marker | null>(null);
  const museedulouvreRef = useRef<L.Marker | null>(null);
  const cathedraleNotreDamedeParisRef = useRef<L.Marker | null>(null);
  const openPoiPopup = (ref: React.RefObject<L.Marker | null>) => {
    if (ref.current) {
      ref.current.openPopup();
    }
  };

  return (
    <section className="map-container">
      <div className="map">
        <Map
          myRef1={arcdetriompheRef}
          myRef2={toureiffelRef}
          myRef3={republiqueRef}
          myRef4={PlacedelaConcordeRef}
          myRef5={museedulouvreRef}
          myRef6={cathedraleNotreDamedeParisRef}
        />
      </div>
      <div className="panneau">
        <Panneau
          myRef1={arcdetriompheRef}
          myRef2={toureiffelRef}
          myRef3={republiqueRef}
          myRef4={PlacedelaConcordeRef}
          myRef5={museedulouvreRef}
          myRef6={cathedraleNotreDamedeParisRef}
          openPopup1={openPoiPopup}
        />
      </div>
    </section>
  );
}

export default PageTest;
