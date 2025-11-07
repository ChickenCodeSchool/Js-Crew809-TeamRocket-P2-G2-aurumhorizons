import video from "../assets/images/video2.mp4";
import ExperiencesCards from "../components/ExperiencesCards";
import MenuDeroulant from "../components/MenuDeroulant";

import "./HomePages.css";

function HomePages() {
  return (
    <>
      <section>
        <div className="background-video">
          <video autoPlay muted loop src={video} />
        </div>
        <div className="texte-video-container">
          <p className="texte-video">
            voyager où vous le voulez grâce à Aurum Horizons
          </p>
        </div>
        <div>
          <MenuDeroulant />
        </div>
      </section>
      <section className="containercards">
        <div className="homecards">
          <div className="cartes">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>
          <div className="cartes">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>

          <div className="cartes">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>
        </div>

        <div className="homecards1">
          <div className="cartes1">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>

          <div className="cartes1">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>

          <div className="cartes1">
            <ExperiencesCards
              name={""}
              image={"./src/assets/images/TestMaldivesimg.jpg"}
              continent={""}
              average_price={""}
              tourist_season={""}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              et optio minima amet ducimus doloribus sed quod, perspiciatis modi
              architecto, neque obcaecati dolore nam alias. Quis, doloribus
              nisi. Ipsa, quia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePages;
