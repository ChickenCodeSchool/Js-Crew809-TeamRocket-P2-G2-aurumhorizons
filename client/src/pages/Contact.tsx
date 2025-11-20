import FormContact from "../components/FormContact";
import ContactAdresse from "../components/ContactAdresse";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="cu-hero">
        <h1>Get in touch with us</h1>
        <h3>
          Fill out the form below or schedule a meeting with us at your
          convenience.
        </h3>
      </section>
      <section className="cu-global">
        <FormContact />
        <ContactAdresse />
      </section>
    </>
  );
}
export default Contact;
