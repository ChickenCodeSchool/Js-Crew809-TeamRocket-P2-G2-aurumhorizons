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
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef1)}>
          <p className="jours">Jour 1</p>
          <h2 id="panneautitre">Hurghada</h2>
          <p className="paragraphe">
            Située sur la côte de la mer Rouge, Hurghada est une station
            balnéaire égyptienne réputée pour ses plages de sable doré et ses
            eaux turquoise. C’est un paradis pour les amateurs de plongée et de
            snorkeling, grâce à ses récifs coralliens spectaculaires et sa vie
            marine colorée. La ville combine détente, activités nautiques et vie
            nocturne animée, tout en offrant un aperçu du charme oriental à
            travers ses souks et ses cafés typiques.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef2)}>
          <p className="jours">Jour 2</p>
          <h2 id="panneautitre">Eden Island Hurghada</h2>
          <p className="paragraphe">
            Eden Island est une petite île paradisiaque au large d’Hurghada, un
            lieu exclusif où le luxe rencontre la nature. Ses plages privées,
            ses eaux cristallines et son atmosphère paisible en font un refuge
            parfait pour se ressourcer. On y pratique la plongée, le kayak ou
            simplement le farniente, dans un cadre idyllique à l’écart de
            l’agitation du continent.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef3)}>
          <p className="jours">Jour 3</p>
          <h2 id="panneautitre">Louxor</h2>
          <p className="paragraphe">
            Louxor est un musée à ciel ouvert, situé sur les rives du Nil.
            Ancienne capitale de l’Égypte pharaonique, elle abrite des trésors
            archéologiques exceptionnels : le temple de Karnak, la Vallée des
            Rois et le temple d’Hatchepsout. Louxor fascine par la grandeur de
            ses monuments et la magie du Nil, offrant un voyage dans le temps au
            cœur de la civilisation égyptienne.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef4)}>
          <p className="jours">Jour 4</p>
          <h2 id="panneautitre">Le Caire</h2>
          <p className="paragraphe">
            Capitale vibrante de l’Égypte, Le Caire est une métropole
            bouillonnante où l’histoire millénaire se mêle à la vie moderne. On
            y découvre les célèbres pyramides de Gizeh, le Sphinx et le musée
            égyptien, qui renferme des trésors de l’Antiquité. Entre le tumulte
            de ses rues, les minarets de ses mosquées et les rives du Nil, Le
            Caire séduit par son énergie unique et son charme oriental.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef5)}>
          <p className="jours">Jour 5</p>
          <h2 id="panneautitre">Alexandrie</h2>
          <p className="paragraphe">
            Fondée par Alexandre le Grand, Alexandrie est la perle de la
            Méditerranée égyptienne. Cette ville portuaire mêle influences
            grecques, romaines et arabes, avec des sites emblématiques comme la
            Bibliotheca Alexandrina, la Citadelle de Qaitbay et les ruines de
            l’ancienne ville antique. Son ambiance douce et son front de mer
            bordé de cafés lui confèrent une atmosphère à la fois culturelle et
            romantique.
          </p>
        </article>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <article onClick={() => openPopup1(myRef6)}>
          <p className="jours">Jour 6</p>
          <h2 id="panneautitre">Ras Mohamed Nature Reserve</h2>
          <p className="paragraphe">
            Située à l’extrême sud du Sinaï, la réserve naturelle de Ras Mohamed
            est un joyau écologique unique. Entre désert aride et mer Rouge
            étincelante, ce parc protégé abrite une biodiversité exceptionnelle,
            tant terrestre que marine. Les plongeurs y découvrent des récifs
            coralliens parmi les plus beaux du monde, tandis que les amateurs de
            nature peuvent y observer oiseaux, mangroves et paysages désertiques
            fascinants.
          </p>
        </article>
      </section>
    </>
  );
}

export default Panneau;
