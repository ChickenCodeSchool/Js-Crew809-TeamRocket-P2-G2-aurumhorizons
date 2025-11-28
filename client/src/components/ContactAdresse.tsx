import { useTranslation } from "react-i18next";
import "./ContactAdresse.css";

function ContactAdresse() {
  const { t } = useTranslation();

  return (
    <>
      <form className="ac-form">
        <div className="ac-content">
          <h2>{t("contact_title")}</h2>
          <ul>
            <li>{t("contact_point1")}</li>
            <li>{t("contact_point2")}</li>
            <li>{t("contact_point3")}</li>
            <li>{t("contact_point4")}</li>
          </ul>
          <div className="ac-location">
            <div className="ac-usa">
              <img src="" alt={t("contact_usa")} />
              <h3>{t("contact_usa")}</h3>
              <p className="cityloc">{t("contact_usa_address")}</p>
            </div>
            <div className="ac-india">
              <img src="" alt={t("contact_india")} />
              <h3>{t("contact_india")}</h3>
              <p className="cityloc">{t("contact_india_address")}</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactAdresse;
