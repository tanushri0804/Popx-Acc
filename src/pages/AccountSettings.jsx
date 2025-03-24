import React from "react";
import "../styles/accountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-container">
      <div className="account-box">
        <h3>Account Settings</h3>
        <div className="profile-section">
          <img
            src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid" 
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h4>Marry Doe</h4>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
