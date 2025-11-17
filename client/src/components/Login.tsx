import React from "react";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
    const handleForgotPassword = () => {
           alert("Redirection vers la récupération du mot de passe...");
  };
  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="login-close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Connexion</h2>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Votre email" required />

          <label>Mot de passe</label>
          <input type="password" placeholder="Votre mot de passe" required />

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
      </div>
    </div>
  );
};

export default Login;
