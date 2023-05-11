import React, { useState } from "react";
import AuthNavbar from "./AuthNavBar";
import AuthFooter from "./AutFooter";
import PFP from "./Images/Trip1.jpg";
import './CSS/UserProfile.css';

const AuthProfile = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showUsernamePopup, setShowUsernamePopup] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [email, setEmail] = useState("example@email.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [username, setUsername] = useState("example_user");
  const [password, setPassword] = useState("example_password");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // handle submit logic here
    setShowEmailPopup(false);
  };

  const handleSubmitPhoneNumber = (e) => {
    e.preventDefault();
    // handle submit logic here
    setShowPhonePopup(false);
  };

  const handleSubmitUsername = (e) => {
    e.preventDefault();
    // handle submit logic here
    setShowUsernamePopup(false);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    // handle submit logic here
    setShowPasswordPopup(false);
  };

  return (
    <div>
      <AuthNavbar />
      <div className="user-profile-header">
        <div className="user-profile-photo">
          <img
            src= {PFP}
            alt="User profile"
            className="user-profile-photo-image"
          />
        </div>
        <h1 className="user-profile-header-title">Your Profile</h1>
      </div>
      <div className="container">
        <div>
          <h2>Email</h2>
          <p>{email}</p>
          <button onClick={() => setShowEmailPopup(true)}>Edit</button>
        </div>
        {showEmailPopup && (
          <div className="popup">
            <form onSubmit={handleSubmitEmail}>
              <label>
                New Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowEmailPopup(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
        <div>
          <h2>Phone Number</h2>
          <p>{phoneNumber}</p>
          <button onClick={() => setShowPhonePopup(true)}>Edit</button>
        </div>
        {showPhonePopup && (
          <div className="popup">
            <form onSubmit={handleSubmitPhoneNumber}>
              <label>
                New Phone Number:
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowPhonePopup(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
        <div>
          <h2>Username</h2>
          <p>{username}</p>
          <button onClick={() => setShowUsernamePopup(true)}>Edit</button>
        </div>
        {showUsernamePopup && (
          <div className="popup">
            <form onSubmit={handleSubmitUsername}>
              <label>
                New Username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowUsernamePopup(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
        <div>
          <h2>Password</h2>
          <p>*********</p>
          <button onClick={() => setShowPasswordPopup(true)}>Edit</button>
        </div>
        {showPasswordPopup && (
          <div className="popup">
            <form onSubmit={handleSubmitPassword}>
              <label>
                New Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowPasswordPopup(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthProfile;
