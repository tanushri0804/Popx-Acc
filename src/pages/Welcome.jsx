import React, { useState } from "react";
import "../styles/welcome.css";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AccountSettings from "../pages/AccountSettings";

const Welcome = () => {
  const [view, setView] = useState("welcome"); // "welcome" | "signin" | "signup" | "account"

  return (
    <div className="welcome-container">
      <div className="mobile-frame">
        {view === "signin" ? (
          <Signin goBack={() => setView("welcome")} goToAccount={() => setView("account")} />
        ) : view === "signup" ? (
          <Signup goBack={() => setView("welcome")} goToAccount={() => setView("account")} />
        ) : view === "account" ? (
          <AccountSettings />
        ) : (
          <div className="welcome-box">
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <button className="create-btn" onClick={() => setView("signup")}>
              Create Account
            </button>
            <button className="login-link" onClick={() => setView("signin")}>
              Already Registered? Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
