import "./FormContact.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FormContact() {
  const { t } = useTranslation();

  return (
    <form className="fc-form">
      <div className="fc-field-group">
        <label className="fc-field-label" htmlFor="name">
          {t("formcontact_name")}
        </label>
        <input
          type="text"
          id="name"
          className="fc-field-input"
          placeholder={t("formcontact_name_placeholder")}
        />
      </div>
      <div className="fc-field-group">
        <label className="fc-field-label" htmlFor="email">
          {t("formcontact_email")}
        </label>
        <input
          type="email"
          id="email"
          className="fc-field-input"
          placeholder={t("formcontact_email_placeholder")}
        />
      </div>
      <div className="fc-field-group">
        <label className="fc-field-label" htmlFor="message">
          {t("formcontact_message")}
        </label>
        <textarea
          id="message"
          className="fc-field-input fc-field-area"
          placeholder={t("formcontact_message_placeholder")}
        />
      </div>
      <div className="fc-terms">
        <input id="terms" type="checkbox" className="fc-terms-checkbox" />
        <label htmlFor="terms" className="fc-terms-label">
          {t("formcontact_terms_prefix")}{" "}
          <Link to="/">{t("formcontact_terms_link")}</Link>
        </label>
      </div>
      <button type="submit" className="fc-submit-form">
        {t("formcontact_send_request")}
      </button>
      <p>{t("formcontact_also_contact")}</p>
      <div className="fc-contact">
        <div className="fc-mail">
          <img
            src="./src/assets/images/iconContact/mail.png"
            alt="iconmail"
            className="fc-mail-logo"
          />
          <p>contact.arumhorisons@gmail.com</p>
        </div>
        <div className="fc-phone">
          <img
            src="./src/assets/images/iconContact/phone.png"
            alt="iconphone"
            className="fc-phone-logo"
          />
          <p>+91 7648442589</p>
        </div>
      </div>
    </form>
  );
}

export default FormContact;
