import "./FormContact.css";
import { Link } from "react-router";

type inputProps = {
  label: string;
};
function FormContact() {
  return (
    <>
      <form className="fc-form">
        <div className="fc-field-group">
          <label className="fc-field-label" htmlFor="name">
            NAME
          </label>
          <input
            type="text"
            id="name"
            className="fc-field-input"
            placeholder="Your name"
          />
        </div>
        <div className="fc-field-group">
          <label className="fc-field-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="fc-field-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="fc-field-group">
          <label className="fc-field-label" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            id="message"
            className="fc-field-input fc-field-area"
            placeholder="Enter your message"
          />
        </div>
        <div className="fc-terms">
          <input id="terms" type="checkbox" className="fc-terms-checkbox" />
          <label htmlFor="terms" className="fc-terms-label">
            I agree with <Link to="/">Terms and Conditions</Link>
          </label>
        </div>
        <button type="submit" className="fc-submit-form">
          Send Your Request
        </button>
        <p>You can also Conact Us via</p>
      </form>
    </>
  );
}

export default FormContact;
