import { type ChangeEvent, useEffect, useState } from "react";
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
    alert("Profile saved!");
  };

  const handleDelete = (): void => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your profile?",
    );
    if (confirmed) {
      localStorage.removeItem("userProfile");
      alert("Account successfully deleted");
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

        <div className="logout-container">
          <button
            className="logout-button"
            onClick={handleLogout}
            type="button"
          >
            Log Out
          </button>
        </div>
      </aside>

      <main className="content">
        {activeSection === "personal" && (
          <section className="section">
            <h2>Personal Information</h2>
            <form className="form-grid">
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Title
                <select
                  name="title"
                  value={profileData.title}
                  onChange={handleInputChange}
                >
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                </select>
              </label>
              <label>
                Birth Date
                <input
                  type="date"
                  name="birthDate"
                  value={profileData.birthDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Nationality
                <input
                  type="text"
                  name="nationality"
                  value={profileData.nationality}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Number of Children
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
        )}

        {activeSection === "quotes" && (
          <section className="section">
            <h2>My Quotes</h2>
            <div className="storage-box">
              <p>Upload and store your quotes here.</p>
              <input type="file" multiple onChange={handleFileChange} />
            </div>
          </section>
        )}

        {activeSection === "trips" && (
          <section className="section">
            <h2>Upcoming Trips</h2>
            <p>Your planned trips will appear here.</p>
          </section>
        )}

        <div className="action-buttons">
          <button className="save-button" onClick={handleSave} type="button">
            Save
          </button>
          <button
            className="delete-button"
            onClick={handleDelete}
            type="button"
          >
            Delete my profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
