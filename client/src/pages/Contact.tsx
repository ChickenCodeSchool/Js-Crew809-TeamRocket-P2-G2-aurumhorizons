import { useTranslation } from "react-i18next";
import ContactAdresse from "../components/ContactAdresse";
import FormContact from "../components/FormContact";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="cu-hero">
        <h1>{t("contact_heading")}</h1>
        <h3>{t("contact_subheading")}</h3>
      </section>
      <section className="cu-global">
        <FormContact />
        <ContactAdresse />
      </section>
    </>
  );
}

export default Contact;
