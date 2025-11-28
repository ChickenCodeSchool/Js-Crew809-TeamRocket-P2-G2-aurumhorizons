import { useTranslation } from "react-i18next";
import img2about from "../assets/images/imgAbout/agenceAbout.png";
import img1about from "../assets/images/imgAbout/equipeAbout.jpg";
import ScrollingBanner from "../components/ScrollingBanner";
import TeamCarouselAbout from "../components/TeamCarouselAbout";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <ScrollingBanner text={t("aurum_horizons")} />
      <h1 className="h1about">{t("about_us")}</h1>

      <section className="top-about">
        <article className="hww-about">
          <h2 className="h2about">{t("how_we_work")}</h2>
          <p>{t("how_we_work_text")}</p>
        </article>

        <article className="dwmud">
          <h2>{t("discover_difference")}</h2>
          <ul>
            <li>{t("efficient_friendly_service")}</li>
            <li>{t("flexible_hassle_free")}</li>
            <li>{t("passionate_honest_experts")}</li>
            <li>{t("value_and_prices")}</li>
            <li>{t("unparalleled_support")}</li>
            <li>{t("dont_just_take_our_word")}</li>
          </ul>
        </article>
      </section>

      <section className="bottom-about">
        <h2 className="h2about">{t("our_specialists")}</h2>
        <article className="special-about">
          <div className="special-aboutTop">
            <img src={img1about} alt={t("specialist_advice_alt")} />
            <p>{t("specialists_text")}</p>
          </div>
          <div className="special-aboutBottom">
            <h3>{t("travel_guide_by_region")}</h3>
            <div className="slideImg-about">
              <TeamCarouselAbout />
            </div>
          </div>
        </article>

        <h2 className="h2about">{t("our_office")}</h2>
        <article className="office-about">
          <div className="txt-office-about">
            <p>
              {t("office_address_line1")}
              <br />
              {t("office_address_line2")}
              <br />
              {t("office_address_line3")}
              <br />
              <br />
              {t("office_phone")}
            </p>
          </div>
          <img src={img2about} alt={t("office_alt")} />
        </article>

        <ScrollingBanner text={t("aurum_horizons")} />
      </section>
    </>
  );
}

export default About;
