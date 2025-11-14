import { useState } from "react";
import "./Devis.css";

function Devis({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [title, setTitle] = useState("Mr");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [bestTimeToContact, setBestTimeToContact] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      lastName,
      firstName,
      email,
      phone,
      adults,
      children,
      departureDate,
      bestTimeToContact,
      comment,
    });
    onClose();

    setLastName("");
    setFirstName("");
  };
  if (!isOpen) return null;

  return (
    <div
      className="overlay"
      onClick={onClose}
      aria-label="Fermer la fenêtre"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      >
        {
          <button className="close-button" onClick={onClose} type="button">
            x
          </button>
        }
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>
              Title*:
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
            </label>
          </div>

          <div className="row">
            <label>
              Last Name*:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label>
              First Name*:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>

          <label>
            Email*:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Phone*:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Adults*:
            <input
              type="number"
              min="0"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              required
            />
          </label>

          <label>
            Children*:
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              required
            />
          </label>

          <label>
            Departure Date*:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </label>

          <label>
            Best time to contact you:
            <input
              type="text"
              value={bestTimeToContact}
              onChange={(e) => setBestTimeToContact(e.target.value)}
              required
            />
          </label>

          <label>
            Comment:
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Devis;
