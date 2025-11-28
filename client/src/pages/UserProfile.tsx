import { type ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

type Section = "personal" | "documents" | "quotes" | "trips";

interface UserProfileData {
  firstName: string;
  lastName: string;
  title: string;
  birthDate: string;
  nationality: string;
  address: string;
  email: string;
  phone: string;
  numberOfChildren: number;
}

const UserProfile: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<Section>("personal");
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState<UserProfileData>({
    firstName: "",
    lastName: "",
    title: "mr",
    birthDate: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    numberOfChildren: 0,
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
  }, []);

  const handleSectionChange = (section: Section): void => {
    setActiveSection(section);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (!files || files.length === 0) return;
    console.log("Uploaded file:", files[0]);
  };

  const handleSave = (): void => {
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    alert(t("userProfile.profileSaved"));
  };

  const handleDelete = (): void => {
    const confirmed = window.confirm(t("userProfile.confirmDelete"));
    if (confirmed) {
      localStorage.removeItem("userProfile");
      alert(t("userProfile.accountDeleted"));
      navigate("/");
    } else {
      navigate("/userprofile");
    }
  };

  const handleLogout = (): void => {
    navigate("/");
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

        <div className="logout-container">
          <button
            className="logout-button"
            onClick={handleLogout}
            type="button"
          >
            {t("userProfile.logOut")}
          </button>
        </div>
      </aside>

      <main className="content">
        {activeSection === "personal" && (
          <section className="section">
            <h2>{t("userProfile.personalInfo")}</h2>
            <form className="form-grid">
              <label>
                {t("userProfile.firstName")}
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.lastName")}
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.title")}
                <select
                  name="title"
                  value={profileData.title}
                  onChange={handleInputChange}
                >
                  <option value="mr">{t("userProfile.mr")}</option>
                  <option value="ms">{t("userProfile.ms")}</option>
                  <option value="mrs">{t("userProfile.mrs")}</option>
                </select>
              </label>
              <label>
                {t("userProfile.birthDate")}
                <input
                  type="date"
                  name="birthDate"
                  value={profileData.birthDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.nationality")}
                <input
                  type="text"
                  name="nationality"
                  value={profileData.nationality}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.address")}
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.email")}
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.phoneNumber")}
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                {t("userProfile.numberOfChildren")}
                <input
                  type="number"
                  name="numberOfChildren"
                  value={profileData.numberOfChildren}
                  onChange={handleInputChange}
                  min={0}
                />
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

        <div className="action-buttons">
          <button className="save-button" onClick={handleSave} type="button">
            {t("userProfile.save")}
          </button>
          <button
            className="delete-button"
            onClick={handleDelete}
            type="button"
          >
            {t("userProfile.deleteProfile")}
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
