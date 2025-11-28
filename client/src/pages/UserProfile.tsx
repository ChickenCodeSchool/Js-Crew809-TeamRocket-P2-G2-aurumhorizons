import { type ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "./UserProfile.css";

type Section = "personal" | "documents" | "quotes" | "trips";

const UserProfile: React.FC = () => {
  const { t } = useTranslation();
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
              {t("userProfile.personalInfo")}
            </button>
          </li>

          <li>
            <button
              className={activeSection === "documents" ? "active" : ""}
              onClick={() => handleSectionChange("documents")}
              type="button"
            >
              {t("userProfile.myDocuments")}
            </button>
          </li>

          <li>
            <button
              className={activeSection === "quotes" ? "active" : ""}
              onClick={() => handleSectionChange("quotes")}
              type="button"
            >
              {t("userProfile.myQuotes")}
            </button>
          </li>

          <li>
            <button
              className={activeSection === "trips" ? "active" : ""}
              onClick={() => handleSectionChange("trips")}
              type="button"
            >
              {t("userProfile.upcomingTrips")}
            </button>
          </li>
        </ul>
      </aside>

      <main className="content">
        {activeSection === "personal" && (
          <section className="section">
            <h2>{t("userProfile.personalInfo")}</h2>
            <form className="form-grid">
              <label>
                {t("userProfile.firstName")}
                <input type="text" />
              </label>

              <label>
                {t("userProfile.lastName")}
                <input type="text" />
              </label>

              <label>
                {t("userProfile.title")}
                <select>
                  <option value="mr">{t("userProfile.mr")}</option>
                  <option value="ms">{t("userProfile.ms")}</option>
                  <option value="mrs">{t("userProfile.mrs")}</option>
                </select>
              </label>

              <label>
                {t("userProfile.birthDate")}
                <input type="date" />
              </label>

              <label>
                {t("userProfile.nationality")}
                <input type="text" />
              </label>

              <label>
                {t("userProfile.address")}
                <input type="text" />
              </label>

              <label>
                {t("userProfile.email")}
                <input type="email" />
              </label>

              <label>
                {t("userProfile.phoneNumber")}
                <input type="tel" />
              </label>

              <label>
                {t("userProfile.numberOfChildren")}
                <input type="number" min={0} />
              </label>
            </form>
          </section>
        )}

        {activeSection === "documents" && (
          <section className="section">
            <h2>{t("userProfile.myDocuments")}</h2>
            <div className="documents-grid">
              {[
                t("userProfile.idDocument"),
                t("userProfile.visa"),
                t("userProfile.proofOfAddress"),
                t("userProfile.bankAccount"),
              ].map((label) => (
                <div key={label} className="drop-card">
                  <p>{label}</p>
                  <label className="drop-zone">
                    <span>{t("userProfile.dragDropOrClick")}</span>
                    <input type="file" onChange={handleFileChange} />
                  </label>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "quotes" && (
          <section className="section">
            <h2>{t("userProfile.myQuotes")}</h2>
            <div className="storage-box">
              <p>{t("userProfile.uploadAndStoreQuotes")}</p>
              <input type="file" multiple onChange={handleFileChange} />
            </div>
          </section>
        )}

        {activeSection === "trips" && (
          <section className="section">
            <h2>{t("userProfile.upcomingTrips")}</h2>
            <p>{t("userProfile.plannedTrips")}</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default UserProfile;
