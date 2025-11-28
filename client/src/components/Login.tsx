import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState<string | null>(null);

  const toggleForm = (signup: boolean) => {
    setIsSignup(signup);
    clearErrors();
    setSignupSuccess(null);
  };

  const clearErrors = () => {
    setLoginEmailError("");
    setLoginPasswordError("");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (!loginEmail) {
      setLoginEmailError(t("login_email_required"));
      valid = false;
    } else if (!validateEmail(loginEmail)) {
      setLoginEmailError(t("login_invalid_email"));
      valid = false;
    } else {
      setLoginEmailError("");
    }

    if (!loginPassword) {
      setLoginPasswordError(t("login_password_required"));
      valid = false;
    } else if (loginPassword.length < 6) {
      setLoginPasswordError(t("login_password_short"));
      valid = false;
    } else {
      setLoginPasswordError("");
    }

    if (valid) {
      console.log("Login successful!");
      setLoginEmail("");
      setLoginPassword("");
      onClose();
      navigate("/user-profile");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (
      !signupName ||
      !signupEmail ||
      !signupPassword ||
      !signupConfirmPassword
    ) {
      valid = false;
    }

    if (valid) {
      setSignupSuccess(t("signup_success"));
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
      setSignupConfirmPassword("");
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-close-btn" onClick={onClose} type="button">
          ✕
        </button>

        <div className="form-toggle">
          <button
            className={!isSignup ? "active" : ""}
            onClick={() => toggleForm(false)}
            type="button"
          >
            {t("login_title")}
          </button>
          <button
            className={isSignup ? "active" : ""}
            onClick={() => toggleForm(true)}
            type="button"
          >
            {t("signup_title")}
          </button>
        </div>

        {!isSignup ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="loginEmail">{t("login_email")}</label>
            <input
              id="loginEmail"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder={t("login_email")}
            />
            {loginEmailError && (
              <span className="error">{loginEmailError}</span>
            )}

            <label htmlFor="loginPassword">{t("login_password")}</label>
            <div className="password-wrapper">
              <input
                id="loginPassword"
                type={showLoginPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder={t("login_password")}
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              >
                {showLoginPassword
                  ? t("toggle_password_hide")
                  : t("toggle_password_show")}
              </button>
            </div>
            {loginPasswordError && (
              <span className="error">{loginPasswordError}</span>
            )}

            <button type="submit" className="login-btn">
              {t("login_btn")}
            </button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            {signupSuccess && (
              <div className="success-message">{signupSuccess}</div>
            )}

            <label htmlFor="signupName">{t("signup_name")}</label>
            <input
              id="signupName"
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder={t("signup_name")}
            />

            <label htmlFor="signupEmail">{t("signup_email")}</label>
            <input
              id="signupEmail"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder={t("signup_email")}
            />

            <label htmlFor="signupPassword">{t("signup_password")}</label>
            <input
              id="signupPassword"
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder={t("signup_password")}
            />

            <label htmlFor="signupConfirmPassword">
              {t("signup_confirm_password")}
            </label>
            <input
              id="signupConfirmPassword"
              type="password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
              placeholder={t("signup_confirm_password")}
            />

            <button type="submit" className="login-btn">
              {t("signup_btn")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
