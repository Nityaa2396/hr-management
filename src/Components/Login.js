import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ onLogin, onRegister, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true); // Toggle between login and register
  const [isForgotPasswordView, setIsForgotPasswordView] = useState(false); // Toggle between login and forgot password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      // Login flow
      onLogin(email, password);
    } else {
      // Register flow
      onRegister(email, password);
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Call the forgot password function
    onForgotPassword(email);
  };

  return (
    <div className="login-container">
      {/* Toggle between Login, Register, and Forgot Password views */}
      {isForgotPasswordView ? (
        <form
          className="forgot-password-form"
          onSubmit={handleForgotPasswordSubmit}
        >
          <h2>Forgot Password</h2>
          <input
            className="login-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="login-button" type="submit">
            Send Reset Link
          </button>
          <button
            className="back-to-login-button"
            onClick={() => setIsForgotPasswordView(false)} // Go back to login view
          >
            Back to Login
          </button>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{isLoginView ? "Login" : "Register"}</h2>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Forgot password link right below the password input */}
          {isLoginView && (
            <div className="forgot-password-container">
              <button
                type="button"
                className="forgot-password-link"
                onClick={() => setIsForgotPasswordView(true)}
              >
                Forgot password?
              </button>
            </div>
          )}

          <button className="login-button" type="submit">
            {isLoginView ? "Login" : "Register"}
          </button>

          <div className="toggle-view-container">
            <button
              type="button"
              className="toggle-view-button"
              onClick={() => setIsLoginView(!isLoginView)}
            >
              {isLoginView
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
