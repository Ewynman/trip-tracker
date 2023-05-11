import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './CSS/Signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert("Please accept the terms and conditions to sign up.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError("");
    // Send form data to backend for further processing
    console.log({ fullName, email, phoneNumber, username, password, confirmPassword });
    // Navigate to login page on successful signup
    history.push("/login");
  };

  const handlePasswordChange = (event) => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,14}$/;
    const passwordIsValid = passwordRegex.test(event.target.value);
    setPasswordError(passwordIsValid ? "" : "Password must be 8-14 characters, and contain at least one capital letter, one number, and one special character.");
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2 className="signHead">Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <br />
        <label>
          <input  type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} required /> I accept the terms and conditions.
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
