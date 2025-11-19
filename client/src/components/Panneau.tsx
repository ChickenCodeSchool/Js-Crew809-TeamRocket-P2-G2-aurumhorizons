import "./Panneau.css";
import type L from "leaflet";
import type { RefObject } from "react";

interface PanneauProps {
  openPopup1: (ref: RefObject<L.Marker | null>) => void;
  myRef1: RefObject<L.Marker | null>;
  myRef2: RefObject<L.Marker | null>;
  myRef3: RefObject<L.Marker | null>;
  myRef4: RefObject<L.Marker | null>;
  myRef5: RefObject<L.Marker | null>;
  myRef6: RefObject<L.Marker | null>;
}
function Panneau({
  openPopup1,
  myRef1,
  myRef2,
  myRef3,
  myRef4,
  myRef5,
  myRef6,
}: PanneauProps) {
  return (
    <>
      <section className="body">
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef1)}>
          <p className="jours">Jour 1</p>
          <h2 id="panneautitre">Hurghada</h2>
          <p className="paragraphe">
            Located on the Red Sea coast, Hurghada is an Egyptian resort town
            renowned for its golden sandy beaches and turquoise waters. It's a
            paradise for diving and snorkeling enthusiasts, thanks to its
            spectacular coral reefs and colorful marine life. The town combines
            relaxation, water sports, and a vibrant nightlife, while offering a
            glimpse of oriental charm through its souks and traditional cafes.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef2)}>
          <p className="jours">Jour 2</p>
          <h2 id="panneautitre">Eden Island Hurghada</h2>
          <p className="paragraphe">
            Eden Island is a small, idyllic island off the coast of Hurghada, an
            exclusive place where luxury meets nature. Its private beaches,
            crystal-clear waters, and peaceful atmosphere make it a perfect
            retreat for rejuvenation. Here, you can enjoy diving, kayaking, or
            simply relaxing in an idyllic setting away from the hustle and
            bustle of the mainland.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef3)}>
          <p className="jours">Jour 3</p>
          <h2 id="panneautitre">Louxor</h2>
          <p className="paragraphe">
            Luxor is an open-air museum, located on the banks of the Nile. The
            former capital of Pharaonic Egypt, it is home to exceptional
            archaeological treasures: the Karnak Temple, the Valley of the
            Kings, and the Temple of Hatshepsut. Luxor fascinates with the
            grandeur of its monuments and the magic of the Nile, offering a
            journey back in time to the heart of Egyptian civilization.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef4)}>
          <p className="jours">Jour 4</p>
          <h2 id="panneautitre">Le Caire</h2>
          <p className="paragraphe">
            Cairo, the vibrant capital of Egypt, is a bustling metropolis where
            millennia of history intertwine with modern life. Here, one can
            discover the famous pyramids of Giza, the Sphinx, and the Egyptian
            Museum, which houses treasures from antiquity. Between the hustle
            and bustle of its streets, the minarets of its mosques, and the
            banks of the Nile, Cairo captivates with its unique energy and
            oriental charm.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef5)}>
          <p className="jours">Jour 5</p>
          <h2 id="panneautitre">Alexandrie</h2>
          <p className="paragraphe">
            Founded by Alexander the Great, Alexandria is the pearl of the
            Egyptian Mediterranean. This port city blends Greek, Roman, and Arab
            influences, with iconic sites such as the Bibliotheca Alexandrina,
            the Citadel of Qaitbay, and the ruins of the ancient city. Its
            gentle ambiance and waterfront lined with cafes create an atmosphere
            that is both cultural and romantic.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
        <article onMouseOver={() => openPopup1(myRef6)}>
          <p className="jours">Jour 6</p>
          <h2 id="panneautitre">Ras Mohamed Nature Reserve</h2>
          <p className="paragraphe">
            Located in the far south of the Sinai Peninsula, the Ras Mohamed
            Nature Reserve is a unique ecological gem. Between the arid desert
            and the sparkling Red Sea this protected park is home to exceptional
            biodiversity, both terrestrial and marine. Divers discover some of
            the world's most beautiful coral reefs, while nature lovers can
            observe birds, mangroves, and fascinating desert landscapes.
          </p>
        </article>
      </section>
    </>
  );
}

export default Panneau;
