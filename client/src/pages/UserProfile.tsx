import { type ChangeEvent, useState } from "react";
import "./UserProfile.css";

type Section = "personal" | "documents" | "quotes" | "trips";

const UserProfile: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("personal");

  const handleSectionChange = (section: Section): void => {
    setActiveSection(section);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (!files || files.length === 0) return;
    console.log("Uploaded file:", files[0]);
  };

  return (
    <div className="user-container">
      <aside className="sidebar">
        <ul>
          <li>
            <button
              className={activeSection === "personal" ? "active" : ""}
              onClick={() => handleSectionChange("personal")}
              type="button"
            >
              Personal Information
            </button>
          </li>

          <li>
            <button
              className={activeSection === "documents" ? "active" : ""}
              onClick={() => handleSectionChange("documents")}
              type="button"
            >
              My Documents
            </button>
          </li>

          <li>
            <button
              className={activeSection === "quotes" ? "active" : ""}
              onClick={() => handleSectionChange("quotes")}
              type="button"
            >
              My Quotes
            </button>
          </li>

          <li>
            <button
              className={activeSection === "trips" ? "active" : ""}
              onClick={() => handleSectionChange("trips")}
              type="button"
            >
              Upcoming Trips
            </button>
          </li>
        </ul>
      </aside>

      <main className="content">
        {activeSection === "personal" ? (
          <section className="section">
            <h2>Personal Information</h2>
            <form className="form-grid">
              <label>
                First Name
                <input type="text" />
              </label>

              <label>
                Last Name
                <input type="text" />
              </label>

              <label>
                Title
                <select>
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                </select>
              </label>

              <label>
                Birth Date
                <input type="date" />
              </label>

              <label>
                Nationality
                <input type="text" />
              </label>

              <label>
                Address
                <input type="text" />
              </label>

              <label>
                Email
                <input type="email" />
              </label>

              <label>
                Phone Number
                <input type="tel" />
              </label>

              <label>
                Number of Children
                <input type="number" min={0} />
              </label>
            </form>
          </section>
        ) : null}

        {activeSection === "documents" ? (
          <section className="section">
            <h2>My Documents</h2>
            <div className="documents-grid">
              {[
                "ID Document",
                "Visa",
                "Proof of Address",
                "Bank Account (RIB)",
              ].map((label) => (
                <div key={label} className="drop-card">
                  <p>{label}</p>
                  <label className="drop-zone">
                    <span>Drag & Drop or Click to Upload</span>
                    <input type="file" onChange={handleFileChange} />
                  </label>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {activeSection === "quotes" ? (
          <section className="section">
            <h2>My Quotes</h2>
            <div className="storage-box">
              <p>Upload and store your quotes here.</p>
              <input type="file" multiple onChange={handleFileChange} />
            </div>
          </section>
        ) : null}

        {activeSection === "trips" ? (
          <section className="section">
            <h2>Upcoming Trips</h2>
            <p>Your planned trips will appear here.</p>
          </section>
        ) : null}
      </main>
    </div>
  );
};

export default UserProfile;
