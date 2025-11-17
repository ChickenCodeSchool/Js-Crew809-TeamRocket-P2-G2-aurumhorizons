import React, { useState } from "react";
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
  const [signupConfirmPasswordError, setSignupConfirmPasswordError] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState("");

  const toggleForm = (signup: boolean) => {
    setIsSignup(signup);
    clearErrors();
    setSignupSuccess("");
  };

  const clearErrors = () => {
    setLoginEmailError("");
    setLoginPasswordError("");
    setSignupNameError("");
    setSignupEmailError("");
    setSignupPasswordError("");
    setSignupConfirmPasswordError("");
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginSubmit = (e: React.FormEvent) => {
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
      alert("Connexion réussie !");
      setLoginEmail("");
      setLoginPassword("");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
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
      alert("Connexion réussie !");
      setSignupSuccess("");
      setSignupName("");
      setSignupEmail("");
      setSignupPassword("");
      setSignupConfirmPassword("");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirection vers la récupération du mot de passe...");
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-close-btn" onClick={onClose}>✕</button>

        <div className="form-toggle">
          <button className={!isSignup ? "active" : ""} onClick={() => toggleForm(false)}>Connexion</button>
          <button className={isSignup ? "active" : ""} onClick={() => toggleForm(true)}>Créer un compte</button>
        </div>

        {!isSignup ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <label>Email</label>
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Votre email" />
            {loginEmailError && <span className="error">{loginEmailError}</span>}

            <label>Mot de passe</label>
            <div className="password-wrapper">
              <input type={showLoginPassword ? "text" : "password"} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Votre mot de passe" />
              <button type="button" className="toggle-password-btn" onClick={() => setShowLoginPassword(!showLoginPassword)}>
                {showLoginPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {loginPasswordError && <span className="error">{loginPasswordError}</span>}

            <button type="submit" className="login-btn">Se connecter</button>
            <button type="button" className="forgot-password-btn" onClick={handleForgotPassword}>Mot de passe oublié ?</button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            {signupSuccess && <div className="success-message">{signupSuccess}</div>}

            <label>Nom</label>
            <input type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} placeholder="Votre nom" />
            {signupNameError && <span className="error">{signupNameError}</span>}

            <label>Email</label>
            <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="Votre email" />
            {signupEmailError && <span className="error">{signupEmailError}</span>}

            <label>Mot de passe</label>
            <div className="password-wrapper">
              <input type={showSignupPassword ? "text" : "password"} value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} placeholder="Votre mot de passe" />
              <button type="button" className="toggle-password-btn" onClick={() => setShowSignupPassword(!showSignupPassword)}>
                {showSignupPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {signupPasswordError && <span className="error">{signupPasswordError}</span>}

            <label>Confirmer le mot de passe</label>
            <div className="password-wrapper">
              <input type={showSignupConfirmPassword ? "text" : "password"} value={signupConfirmPassword} onChange={(e) => setSignupConfirmPassword(e.target.value)} placeholder="Confirmer le mot de passe" />
              <button type="button" className="toggle-password-btn" onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}>
                {showSignupConfirmPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {signupConfirmPasswordError && <span className="error">{signupConfirmPasswordError}</span>}

            <button type="submit" className="login-btn">Créer un compte</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;