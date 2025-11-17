import img2about from "../assets/images/imgAbout/agenceAbout.png";
import img1about from "../assets/images/imgAbout/equipeAbout.jpg";
import ScrollingBanner from "../components/ScrollingBanner";
import TeamCarouselAbout from "../components/TeamCarouselAbout";

import "./About.css";

function About() {
  return (
    <>
      <ScrollingBanner text={"Aurum Horizons"} />
      <h1 className="h1about">About us</h1>
      <section className="top-about">
        <article className="hww-about">
          <h2 className="h2about">How we work</h2>
          <p>
            Our approach is one of true craftsmanship. We begin with a
            confidential consultation to deeply understand your unique desires
            and travel aspirations. Leveraging our expertise and exclusive
            network, our travel artisans then sculpt a 100% bespoke itinerary,
            where every detail is orchestrated with absolute precision. From the
            initial design to your return, we manage all logistics behind the
            scenes and provide discreet, 24/7 support. Your only task is to
            immerse yourself in the exceptional.
          </p>
        </article>
        <article className="dwmud">
          <h2>Discover what makes us different</h2>
          <ul>
            <li>Efficient and friendly service</li>
            <li>Flexible and hassle free</li>
            <li>Passionate, honest experts</li>
            <li>Value and prices</li>
            <li>Unparalleled support</li>
            <li>Don’t just take our word for it</li>
          </ul>
        </article>
      </section>
      <section className="bottom-about">
        <h2 className="h2about">Our specialists</h2>
        <article className="special-about">
          <div className="special-aboutTop">
            <img
              src={img1about}
              alt="an specialist giving some advice to clients"
            />
            <p>
              Our Specialists are true travel architects, defined by their
              excellence. Selected for their intimate, first-hand knowledge of
              exclusive destinations, their expertise lies in intuitive
              listening to discern your desires. Passionate, discreet, and
              exceptionally connected, they anticipate every detail, ensuring
              flawless tailor-made planning and your absolute peace of mind.
            </p>
          </div>
          <div className="special-aboutBottom">
            <h3>Specialists by region</h3>
            <div className="slideImg-about">
              <TeamCarouselAbout />
            </div>
          </div>
        </article>
        <h2 className="h2about">Our Office</h2>
        <article className="office-about">
          <div className="txt-office-about">
            <p>
              2 street Kellermann,
              <br />
              59100 Roubaix,
              <br />
              France.
              <br />
              <br />
              +33 9 72 10 10 07
            </p>
          </div>
          <img src={img2about} alt="a luxury office" />
        </article>
        <ScrollingBanner text={"Aurum Horizons"} />
      </section>
    </>
  );
}

export default About;
