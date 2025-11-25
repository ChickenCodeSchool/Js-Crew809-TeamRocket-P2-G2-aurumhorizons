import type React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingModal.css";

interface BookingModalProps {
  onClose: () => void;
  serviceName: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  onClose,
  serviceName,
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (!date || !time || !location) return;

    alert(`
Reservation confirmed!
Service: ${serviceName}
Date: ${date.toLocaleDateString()}
Time: ${time}
People: ${people}
Location: ${location}
    `);

    onClose();
  };

  const handleKeyDownOverlay = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  const handleKeyDownDialog = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
      onKeyDown={handleKeyDownOverlay}
    >
      <dialog
        className="modal-content"
        open
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownDialog}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 id="modal-title" className="modal-title">
          Book {serviceName}
        </h2>

        <label htmlFor="booking-date" className="modal-label">
          Date
        </label>
        <DatePicker
          id="booking-date"
          selected={date}
          onChange={(selected) => setDate(selected)}
          minDate={new Date()}
          placeholderText="Select a date"
          className="modal-input"
        />

        <label htmlFor="booking-time" className="modal-label">
          Time
        </label>
        <input
          id="booking-time"
          type="time"
          className="modal-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="booking-people" className="modal-label">
          Number of people
        </label>
        <select
          id="booking-people"
          className="modal-input"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <label htmlFor="booking-location" className="modal-label">
          Location
        </label>
        <input
          id="booking-location"
          type="text"
          className="modal-input"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          type="button"
          className="btn-confirm"
          disabled={!date || !time || !location}
          onClick={handleSubmit}
        >
          Confirm reservation
        </button>
      </dialog>
    </div>,
    document.body,
  );
};

export default BookingModal;
