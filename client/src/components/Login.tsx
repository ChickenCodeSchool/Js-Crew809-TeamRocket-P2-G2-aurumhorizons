import type React from "react";
import { useState } from "react";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
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
  const [signupNameError, setSignupNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");
  const [signupConfirmPasswordError, setSignupConfirmPasswordError] =
    useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] =
    useState(false);
  const [signupSuccess, setSignupSuccess] = useState<string | null>(null);
  const toggleForm = (signup: boolean) => {
    setIsSignup(signup);
    clearErrors();
    setSignupSuccess(null);
  };

  const clearErrors = () => {
    setLoginEmailError("");
    setLoginPasswordError("");
    setSignupNameError("");
    setSignupEmailError("");
    setSignupPasswordError("");
    setSignupConfirmPasswordError("");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (!loginEmail) {
      setLoginEmailError("L'email est requis");
      valid = false;
    } else if (!validateEmail(loginEmail)) {
      setLoginEmailError("Email invalide");
      valid = false;
    } else {
      setLoginEmailError("");
    }

    if (!loginPassword) {
      setLoginPasswordError("Mot de passe requis");
      valid = false;
    } else if (loginPassword.length < 6) {
      setLoginPasswordError("Mot de passe trop court");
      valid = false;
    } else {
      setLoginPasswordError("");
    }

    if (valid) {
      console.log("Connexion réussie !");
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (!signupName) {
      setSignupNameError("Nom requis");
      valid = false;
    } else {
      setSignupNameError("");
    }

    if (!signupEmail) {
      setSignupEmailError("Email requis");
      valid = false;
    } else if (!validateEmail(signupEmail)) {
      setSignupEmailError("Email invalide");
      valid = false;
    } else {
      setSignupEmailError("");
    }

    if (!signupPassword) {
      setSignupPasswordError("Mot de passe requis");
      valid = false;
    } else if (signupPassword.length < 6) {
      setSignupPasswordError("Mot de passe trop court");
      valid = false;
    } else {
      setSignupPasswordError("");
    }

    if (signupConfirmPassword !== signupPassword) {
      setSignupConfirmPasswordError("Les mots de passe ne correspondent pas");
      valid = false;
    } else {
      setSignupConfirmPasswordError("");
    }

    if (valid) {
      console.log("Inscription réussie !");
      setSignupSuccess("Compte créé avec succès !");
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
      setSignupConfirmPassword("");
    }
  };

  const handleForgotPassword = () => {
    console.log("Redirection vers la récupération du mot de passe.");
  };

  const toggleLoginPassword = () => setShowLoginPassword(!showLoginPassword);
  const toggleSignupPassword = () => setShowSignupPassword(!showSignupPassword);
  const toggleSignupConfirmPassword = () =>
    setShowSignupConfirmPassword(!showSignupConfirmPassword);

  return (
    <div
      className="login-modal-overlay"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="button"
      tabIndex={0}
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="login-close-btn"
          onClick={onClose}
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="form-toggle">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={!isSignup ? "active" : ""}
            onClick={() => toggleForm(false)}
          >
            Connexion
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className={isSignup ? "active" : ""}
            onClick={() => toggleForm(true)}
          >
            Créer un compte
          </button>
        </div>

        {!isSignup ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="loginEmail">Email</label>
            <input
              id="loginEmail"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Votre email"
            />
            {loginEmailError && (
              <span className="error">{loginEmailError}</span>
            )}

            <label htmlFor="loginPassword">Mot de passe</label>
            <div className="password-wrapper">
              <input
                id="loginPassword"
                type={showLoginPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Votre mot de passe"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={toggleLoginPassword}
              >
                {showLoginPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {loginPasswordError && (
              <span className="error">{loginPasswordError}</span>
            )}

            <button type="submit" className="login-btn">
              Se connecter
            </button>
            <button
              type="button"
              className="forgot-password-btn"
              onClick={handleForgotPassword}
            >
              Mot de passe oublié ?
            </button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            {signupSuccess && (
              <div className="success-message">{signupSuccess}</div>
            )}

            <label htmlFor="signupName">Nom</label>
            <input
              id="signupName"
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Votre nom"
            />
            {signupNameError && (
              <span className="error">{signupNameError}</span>
            )}

            <label htmlFor="signupEmail">Email</label>
            <input
              id="signupEmail"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Votre email"
            />
            {signupEmailError && (
              <span className="error">{signupEmailError}</span>
            )}

            <label htmlFor="signupPassword">Mot de passe</label>
            <div className="password-wrapper">
              <input
                id="signupPassword"
                type={showSignupPassword ? "text" : "password"}
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Votre mot de passe"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={toggleSignupPassword}
              >
                {showSignupPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {signupPasswordError && (
              <span className="error">{signupPasswordError}</span>
            )}

            <label htmlFor="signupConfirmPassword">
              Confirmer le mot de passe
            </label>
            <div className="password-wrapper">
              <input
                id="signupConfirmPassword"
                type={showSignupConfirmPassword ? "text" : "password"}
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                placeholder="Confirmer le mot de passe"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={toggleSignupConfirmPassword}
              >
                {showSignupConfirmPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {signupConfirmPasswordError && (
              <span className="error">{signupConfirmPasswordError}</span>
            )}

            <button type="submit" className="login-btn">
              Créer un compte
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
