import type { RefObject } from "react";
import { useEffect } from "react";
import { MapContainer, useMap } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import "./Map.css";
import type { Intermaps } from "./Gps";

interface PropsMap {
  intermaps: Intermaps | null;
  myRef1: RefObject<L.Marker | null>;
  myRef2: RefObject<L.Marker | null>;
  myRef3: RefObject<L.Marker | null>;
  myRef4: RefObject<L.Marker | null>;
  myRef5: RefObject<L.Marker | null>;
  myRef6: RefObject<L.Marker | null>;
}

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) {
      map.fitBounds(positions, { padding: [80, 80] });
    }
  }, [map, positions]);

  return null;
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
function Map({
  intermaps,
  myRef1,
  myRef2,
  myRef3,
  myRef4,
  myRef5,
  myRef6,
}: PropsMap) {
  const positions: [number, number][] = intermaps
    ? [
        [intermaps?.locations[0].coord.lat, intermaps?.locations[0].coord.lng],
        [intermaps?.locations[1].coord.lat, intermaps?.locations[1].coord.lng],
        [intermaps?.locations[2].coord.lat, intermaps?.locations[2].coord.lng],
        [intermaps?.locations[3].coord.lat, intermaps?.locations[3].coord.lng],
        [intermaps?.locations[4].coord.lat, intermaps?.locations[4].coord.lng],
        [intermaps?.locations[5].coord.lat, intermaps?.locations[5].coord.lng],
      ]
    : [];

  return (
    <div>
      <MapContainer
        center={[27.26508400396975, 33.801930148882434]}
        zoom={10}
        scrollWheelZoom={false}
        // style={{ height: "900px", width: "100%" }}
        className="sizeGpsMap"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds positions={positions} />
        {/* ... reste de votre code inchangé ... */}
        {intermaps && (
          <>
            <div className="toureiffel">
              <Marker
                ref={myRef2}
                position={[
                  intermaps.locations[1].coord.lat,
                  intermaps.locations[1].coord.lng,
                ]}
              >
                <Popup>
                  {intermaps.locations[1].lieu} <br />
                </Popup>
              </Marker>
            </div>
            <Marker
              ref={myRef3}
              position={[
                intermaps.locations[2].coord.lat,
                intermaps.locations[2].coord.lng,
              ]}
            >
              <Popup>
                {intermaps.locations[2].lieu} <br />
              </Popup>
            </Marker>
            <Marker
              ref={myRef4}
              position={[
                intermaps.locations[3].coord.lat,
                intermaps.locations[3].coord.lng,
              ]}
            >
              <Popup>
                {intermaps.locations[3].lieu} <br />
              </Popup>
            </Marker>
            <Marker
              ref={myRef1}
              position={[
                intermaps.locations[0].coord.lat,
                intermaps.locations[0].coord.lng,
              ]}
            >
              <Popup>
                {intermaps.locations[0].lieu} <br />
              </Popup>
            </Marker>
            <Marker
              ref={myRef5}
              position={[
                intermaps.locations[4].coord.lat,
                intermaps.locations[4].coord.lng,
              ]}
            >
              <Popup>
                {intermaps.locations[4].lieu} <br />
              </Popup>
            </Marker>
            <Marker
              ref={myRef6}
              position={[
                intermaps.locations[5].coord.lat,
                intermaps.locations[5].coord.lng,
              ]}
            >
              <Popup>
                {intermaps.locations[5].lieu} <br />
              </Popup>
            </Marker>
          </>
        )}
        <Polyline
          positions={positions}
          color="black"
          weight={3}
          dashArray="10, 10"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
