import type L from "leaflet";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Map from "../components/Map.tsx";
import Panneau from "../components/Panneau.tsx";
import "leaflet/dist/leaflet.css";
import "./Gps.css";

export interface MapInterface {
  id: number;
  day: number;
  coord: { lat: number; lng: number };
  lieu: string;
  description: string;
}
export interface Intermaps {
  locations: MapInterface[];
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function Gps({ cityId }: any) {
  const { t } = useTranslation();
  const [isloading, setisloading] = useState(true);

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

  const [intermaps, setintermaps] = useState<Intermaps | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/detailstravel/${cityId}`)
      .then((res) => res.json())
      .then((resData) => {
        setintermaps(resData);
        setisloading(false);
      });
  }, [cityId]);

  return (
    <section className="section-map">
      <article className="map-container">
        <div className="map">
          {isloading ? (
            <p>{t("gps_loading")}</p>
          ) : (
            <Map
              intermaps={intermaps}
              myRef1={arcdetriompheRef}
              myRef2={toureiffelRef}
              myRef3={republiqueRef}
              myRef4={PlacedelaConcordeRef}
              myRef5={museedulouvreRef}
              myRef6={cathedraleNotreDamedeParisRef}
            />
          )}
        </div>
        <div className="panneau">
          {isloading ? (
            <p>{t("gps_loading")}</p>
          ) : (
            <Panneau
              intermaps={intermaps}
              myRef1={arcdetriompheRef}
              myRef2={toureiffelRef}
              myRef3={republiqueRef}
              myRef4={PlacedelaConcordeRef}
              myRef5={museedulouvreRef}
              myRef6={cathedraleNotreDamedeParisRef}
              openPopup1={openPoiPopup}
            />
          )}
        </div>
      </article>
    </section>
  );
}

export default Gps;
