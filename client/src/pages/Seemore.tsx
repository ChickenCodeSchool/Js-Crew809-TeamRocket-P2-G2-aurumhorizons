import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ExperiencesCards from "../components/ExperiencesCards";

import imageForId2 from "../assets/images/imgHomepage/EgyptHomePage.png";
import imageForId4 from "../assets/images/imgHomepage/PhillipinesHomePage.jpg";
import imageForId1 from "../assets/images/imgHomepage/baliHomePage.png";
import imageForId6 from "../assets/images/imgHomepage/islandHomePage.png";
import imageForId3 from "../assets/images/imgHomepage/maldiveHomePage.png";
import imageForId5 from "../assets/images/imgHomepage/seychelleHomepage.png";
import imageForId13 from "../assets/images/imgSeemore/australieseemore.png";
import imageForId14 from "../assets/images/imgSeemore/canadaseemore.png";
import imageForId9 from "../assets/images/imgSeemore/costaricaseemore.jpg";
import imageForId10 from "../assets/images/imgSeemore/greeceseemore.png";
import imageForId7 from "../assets/images/imgSeemore/japonseemore.jpg";
import imageForId12 from "../assets/images/imgSeemore/maroccoseemore.jpg";
import imageForId16 from "../assets/images/imgSeemore/newzealandseemore.png";
import imageForId11 from "../assets/images/imgSeemore/peruseemore.jpg";
import imageForId15 from "../assets/images/imgSeemore/thailandseemore.jpg";
import imageForId8 from "../assets/images/imgSeemore/veniseseemore.jpg";

import "./Seemore.css";

interface Destination {
  id: number;
  continent: string;
  tourist_season: string;
  average_price: string;
}

type GroupedDestinations = Record<string, Destination[]>;

const destinationImageMap: Record<number, string> = {
  1: imageForId1,
  2: imageForId2,
  3: imageForId3,
  4: imageForId4,
  5: imageForId5,
  6: imageForId6,
  7: imageForId7,
  8: imageForId8,
  9: imageForId9,
  10: imageForId10,
  11: imageForId11,
  12: imageForId12,
  13: imageForId13,
  14: imageForId14,
  15: imageForId15,
  16: imageForId16,
};

const Seemore: React.FC = () => {
  const { t } = useTranslation();
  const [dataDestination, setDataDestination] = useState<Destination[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/destinations")
      .then((res) => res.json())
      .then((destinationData: Destination[]) =>
        setDataDestination(destinationData),
      )
      .catch(() => setDataDestination([]));
  }, []);

  const groupedDestinations = useMemo(() => {
    return dataDestination.reduce((acc: GroupedDestinations, destination) => {
      const { continent } = destination;
      if (!acc[continent]) acc[continent] = [];
      acc[continent].push(destination);
      return acc;
    }, {});
  }, [dataDestination]);

  return (
    <>
      {/* Top section with title and intro */}
      <section className="top-container">
        <article className="topseemore">
          <h1>{t("seemore_title")}</h1>
          <div className="ptopsee">
            <p>{t("seemore_intro_p1")}</p>
            <p>{t("seemore_intro_p2")}</p>
          </div>
        </article>
      </section>

      {/* Destinations grouped by continent */}
      <section className="seemore-page-container">
        {Object.keys(groupedDestinations).map((continentName) => (
          <div key={continentName} className="continent-group-seemore">
            <h2 className="continent-title-seemore">
              {t(`continents.${continentName}`, continentName)}
            </h2>
            <div className="containercardseemore">
              {groupedDestinations[continentName].map((destination) => {
                const imageUrl = destinationImageMap[destination.id];
                const translatedName = t(
                  `destinations.${destination.id}.name`,
                  `Destination ${destination.id}`,
                );
                const translatedDescription = t(
                  `destinations.${destination.id}.description`,
                  "Description not available",
                );

                return (
                  <article key={destination.id} className="carteseemore">
                    <div className="backcardsee">
                      <h2 className="h2seemore">{translatedName}</h2>

                      {/* ExperiencesCards sans description */}
                      <ExperiencesCards
                        name={translatedName}
                        image={imageUrl}
                        continent={t(
                          `continents.${destination.continent}`,
                          destination.continent,
                        )}
                        average_price={destination.average_price}
                        tourist_season={destination.tourist_season}
                      />

                      {/* Description affichée séparément */}
                      <p className="PseePage">{translatedDescription}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Seemore;
