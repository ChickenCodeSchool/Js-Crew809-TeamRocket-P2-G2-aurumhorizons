import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
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
      setLoginEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(loginEmail)) {
      setLoginEmailError("Invalid email");
      valid = false;
    } else {
      setLoginEmailError("");
    }

    if (!loginPassword) {
      setLoginPasswordError("Password is required");
      valid = false;
    } else if (loginPassword.length < 6) {
      setLoginPasswordError("Password is too short");
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

    if (!signupName) {
      valid = false;
    }

    if (valid) {
      setSignupSuccess("Account created successfully!");
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
            Login
          </button>
          <button
            className={isSignup ? "active" : ""}
            onClick={() => toggleForm(true)}
            type="button"
          >
            Sign Up
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
              placeholder="Your email"
            />
            {loginEmailError && (
              <span className="error">{loginEmailError}</span>
            )}

            <label htmlFor="loginPassword">Password</label>
            <div className="password-wrapper">
              <input
                id="loginPassword"
                type={showLoginPassword ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Your password"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              >
                {showLoginPassword ? "🌑" : "🌞"}
              </button>
            </div>
            {loginPasswordError && (
              <span className="error">{loginPasswordError}</span>
            )}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            {signupSuccess && (
              <div className="success-message">{signupSuccess}</div>
            )}

            <label htmlFor="signupName">Name</label>
            <input
              id="signupName"
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Your name"
            />

            <label htmlFor="signupEmail">Email</label>
            <input
              id="signupEmail"
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Your email"
            />

            <label htmlFor="signupPassword">Password</label>
            <input
              id="signupPassword"
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Your password"
            />

            <label htmlFor="signupConfirmPassword">Confirm Password</label>
            <input
              id="signupConfirmPassword"
              type="password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />

            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
