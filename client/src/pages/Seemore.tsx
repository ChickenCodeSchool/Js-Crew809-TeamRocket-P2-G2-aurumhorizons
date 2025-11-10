import { type ReactNode, useEffect, useState } from "react";
import ExperiencesCards from "../components/ExperiencesCards";

import imageForId13 from "../assets/images/imgSeemore/australieseemore.png";
import imageForId1 from "../assets/images/imgHomepage/baliHomePage.png";
import imageForId14 from "../assets/images/imgSeemore/canadaseemore.png";
import imageForId9 from "../assets/images/imgSeemore/costaricaseemore.jpg";
import imageForId2 from "../assets/images/imgHomepage/EgyptHomePage.png";
import imageForId10 from "../assets/images/imgSeemore/greeceseemore.png";
import imageForId6 from "../assets/images/imgHomepage/islandHomePage.png";
import imageForId7 from "../assets/images/imgSeemore/japonseemore.jpg";
import imageForId3 from "../assets/images/imgHomepage/maldiveHomePage.png";
import imageForId12 from "../assets/images/imgSeemore/maroccoseemore.jpg";
import imageForId16 from "../assets/images/imgSeemore/newzealandseemore.png";
import imageForId11 from "../assets/images/imgSeemore/peruseemore.jpg";
import imageForId4 from "../assets/images/imgHomepage/PhillipinesHomePage.jpg";
import imageForId5 from "../assets/images/imgHomepage/seychelleHomepage.png";
import imageForId15 from "../assets/images/imgSeemore/thailandseemore.jpg";
import imageForId8 from "../assets/images/imgSeemore/veniseseemore.jpg";

import "./Seemore.css";

interface Destination {
  description: ReactNode;
  tourist_season: string;
  average_price: string;
  continent: string;
  id: number;
  name: string;
}

const destinationImageMap: { [key: number]: string } = {
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
  const [dataDestination1, setDataDestination1] = useState<Destination[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/destinations")
      .then((res) => res.json())
      .then((destinationData) => {
        setDataDestination1(destinationData as Destination[]);
      });
  }, []);

  return (
    <>
      <section className="containercardseemore">
        {dataDestination1.map((destination: Destination) => {
          const imageUrl = destinationImageMap[destination.id];

          return (
            <article key={destination.id} className="carteseemore">
              <ExperiencesCards
                name={destination.name}
                image={imageUrl}
                continent={destination.continent}
                average_price={destination.average_price}
                tourist_season={destination.tourist_season}
              />
              <p className="PseePage">{destination.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Seemore;
