import { useTranslation } from "react-i18next";
import "./MentionLegal.css";

function MentionLegal() {
  const { t } = useTranslation();

  return (
    <section className="container-ml-tot">
      <div className="container-ml">
        <h1>{t("legal_notice_title")}</h1>
        <p>{t("legal_notice_intro")}</p>

        <h2>{t("legal_notice_site_edition")}</h2>
        <p>{t("legal_notice_site_description")}</p>
        <p>{t("legal_notice_company_info")}</p>
        <p>{t("legal_notice_vat_info")}</p>

        <h2>{t("legal_notice_hosting")}</h2>
        <p>{t("legal_notice_hosting_info")}</p>
        <p>{t("legal_notice_hosting_contact")}</p>

        <h2>{t("legal_notice_director")}</h2>
        <p>{t("legal_notice_director_info")}</p>

        <h2>{t("legal_notice_travel_registration")}</h2>
        <p>{t("legal_notice_travel_registration_info")}</p>
        <p>{t("legal_notice_financial_guarantee")}</p>
        <p>{t("legal_notice_professional_insurance")}</p>

        <h2>{t("legal_notice_contact_us")}</h2>
        <p>{t("legal_notice_contact_intro")}</p>
        <ul>
          <li>{t("legal_notice_contact_phone")}</li>
          <li>
            {t("legal_notice_contact_email_prefix")}
            <a href="mailto:contact@aurumhorizons.com">
              contact@aurumhorizons.com
            </a>
          </li>
          <li>{t("legal_notice_contact_mail")}</li>
        </ul>

        <h2>{t("legal_notice_intellectual_property")}</h2>
        <p>{t("legal_notice_ip_description")}</p>
        <p>{t("legal_notice_ip_reproduction")}</p>
      </div>
    </section>
  );
}

export default MentionLegal;
