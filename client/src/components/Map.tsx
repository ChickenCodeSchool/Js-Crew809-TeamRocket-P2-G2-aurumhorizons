import type { RefObject } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import "./Map.css";

// interface PropsTechnique {
//   etapes: Array<{
//     jour: number;
//     nom: string;
//     coords: [number, number];
//     description: string;
//   }>;
//   onMarkerClick: (jour: number) => void;
//   jour: number | null;
// }
interface PropsMap {
  // etapes: Array<any>; // tu pourras préciser le type plus tard
  // onMarkerClick: (jour: number) => void;
  // jour: number | null;
  myRef1: RefObject<L.Marker | null>;
  myRef2: RefObject<L.Marker | null>;
  myRef3: RefObject<L.Marker | null>;
  myRef4: RefObject<L.Marker | null>;
  myRef5: RefObject<L.Marker | null>;
  myRef6: RefObject<L.Marker | null>;
}
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
function Map({
  // etapes,
  // onMarkerClick,
  // jour,
  myRef1,
  myRef2,
  myRef3,
  myRef4,
  myRef5,
  myRef6,
}: PropsMap) {
  return (
    <div>
      <MapContainer
        center={[27.26508400396975, 33.801930148882434]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "900px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="toureiffel">
          <Marker
            ref={myRef2}
            position={[27.184452450256146, 33.96789760907389]}
            eventHandlers={{
              click: () => {
                console.log("poulet");
              },
            }}
          >
            <Popup>
              Eden Island Hurghada <br />
            </Popup>
          </Marker>
        </div>
        <Marker ref={myRef3} position={[25.676069130790296, 32.64141729083801]}>
          <Popup>
            Louxor <br />
          </Popup>
        </Marker>
        <Marker
          ref={myRef4}
          position={[30.045960879499848, 31.233057621451216]}
        >
          <Popup>
            Le Caire <br />
          </Popup>
        </Marker>
        <Marker ref={myRef1} position={[27.26508400396975, 33.801930148882434]}>
          <Popup>
            Hurghada <br />
          </Popup>
        </Marker>
        <Marker ref={myRef5} position={[31.262036977832707, 30.48016685546015]}>
          <Popup>
            Alexandrie <br />
          </Popup>
        </Marker>
        <Marker
          ref={myRef6}
          position={[27.830978626267246, 34.282786415569404]}
        >
          <Popup>
            Ras Mohamed Nature Reserve <br />
          </Popup>
        </Marker>
        <Polyline
          positions={[
            [27.26508400396975, 33.801930148882434],
            [27.184452450256146, 33.96789760907389],
            [25.676069130790296, 32.64141729083801],
            [30.045960879499848, 31.233057621451216],
            [31.262036977832707, 30.48016685546015],
            [27.830978626267246, 34.282786415569404],
          ]}
          color="black"
          weight={3}
          dashArray="10, 10"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
