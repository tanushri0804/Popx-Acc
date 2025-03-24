import React from "react";
import "../styles/signup.css";

const Signup = ({ goBack, goToAccount }) => {
  return (
    <div className="signup-box">
      <h2>Create your <br /> PopX account</h2>

      <div className="input-group">
        <label>Full Name*</label>
        <input type="text" placeholder="Enter full name" />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input type="text" placeholder="Enter phone number" />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input type="email" placeholder="Enter email" />
      </div>

      <div className="input-group">
        <label>Password*</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <div className="input-group">
        <label>Company Name</label>
        <input type="text" placeholder="Enter company name" />
      </div>

      <div className="radio-group">
        <label>Are you an Agency?*</label>
        <div className="radio-options">
          <input type="radio" id="yes" name="agency" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agency" />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <button className="signup-btn" onClick={goToAccount}>Create Account</button>
      <button className="back-btn" onClick={goBack}>
        Back to Welcome
      </button>
    </div>
  );
};

export default Signup;
