import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import video from "../assets/videos/video7.mp4";
import ExperiencesCards from "../components/ExperiencesCards";
import MenuDeroulant from "../components/MenuDeroulant";

import imageForId2 from "../assets/images/imgHomepage/EgyptHomePage.png";
import imageForId4 from "../assets/images/imgHomepage/PhillipinesHomePage.jpg";
import imageForId1 from "../assets/images/imgHomepage/baliHomePage.png";
import imageForId6 from "../assets/images/imgHomepage/islandHomePage.png";
import imageForId3 from "../assets/images/imgHomepage/maldiveHomePage.png";
import imageForId5 from "../assets/images/imgHomepage/seychelleHomepage.png";
import ButtonHomePage from "../components/ButtonHomePage.tsx";

import "./HomePages.css";

interface Destination {
  description: string;
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
};

const HomePages: React.FC = () => {
  const { t } = useTranslation();
  const [dataDestination1, setDataDestination1] = useState<Destination[]>([]);
  const idsToFetch1 = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const fetchPromises = idsToFetch1.map((id) =>
      fetch(`http://localhost:3310/api/destinations/${id}.json`)
        .then((res) => res.json())
        .then((data) => data as Destination),
    );
    Promise.all(fetchPromises).then((destinationData) => {
      setDataDestination1(destinationData);
    });
  }, []);

  return (
    <>
      <section>
        <div className="background-video">
          <video autoPlay muted loop src={video} />
          <div>
            <ButtonHomePage />
          </div>
        </div>
        <div className="texte-video-container">
          <p className="texte-video">{t("home_welcome")}</p>
        </div>
        <div>
          <MenuDeroulant />
        </div>
      </section>

      <section className="containercards">
        {dataDestination1.map((destination) => {
          const imageUrl = destinationImageMap[destination.id];

          return (
            <article key={destination.id} className="cartes">
              <ExperiencesCards
                name={t(`destinations.${destination.id}.name`)}
                image={imageUrl}
                continent={t(`destinations.${destination.id}.continent`)}
                average_price={t(
                  `destinations.${destination.id}.average_price`,
                )}
                tourist_season={t(
                  `destinations.${destination.id}.tourist_season`,
                )}
              />
              <p className="PhomePage">
                {t(`destinations.${destination.id}.description`)}
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default HomePages;
