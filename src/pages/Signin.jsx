import React from "react";
import "../styles/signin.css";

const Signin = ({ goBack, goToAccount}) => {
  return (
    <div className="signin-box">
      <h2>Signin to your <br /> PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Email Field */}
      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      {/* Password Field */}
      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      {/* Login Button */}
      <button className="login-btn" onClick={goToAccount}>Login</button>

      {/* Back Button */}
      <button className="back-btn" onClick={goBack}>
        Back to Welcome
      </button>
    </div>
  );
};

export default Signin;
