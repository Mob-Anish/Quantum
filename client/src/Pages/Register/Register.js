import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as routes from "../../Constants/routes";

const register = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [tagline, setTagline] = useState("");

  return (
    <div className="register">
      <div className="register__background">
        <div className="register__quantum__logo">
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="register__title">
          <span
            style={{ color: "#ffffff", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Init your Quantum account 🤙
          </span>
        </div>
        <div className="register__form">
          <form className="register__form__field">
            <div className="form--field">
              <div className="input__field">
                <label htmlFor="fullname">Full Name *</label>
                <input
                  type={"text"}
                  name="fullname"
                  className="inlinefont focus"
                  placeholder="Write your name . . ."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="input__field" style={{ marginLeft: "2rem" }}>
                <label htmlFor="username">User Name *</label>
                <input
                  type={"text"}
                  name="username"
                  className="inlinefont focus"
                  placeholder="Pick your username . . ."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="input__field">
              <label htmlFor="emailaddress">Email Address *</label>
              <input
                type={"text"}
                name="emailaddress"
                className="inlinefont focus"
                placeholder="hmm"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                autoFocus
              />
            </div>
            <div className="input__field tagline--field">
              <label htmlFor="tagline">Tell us about what you do:</label>
              <input
                type={"text"}
                name="tagline"
                className="inlinefont focus"
                placeholder="Write about yourself in short . . ."
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                autoFocus
              />
            </div>
            <span>
              By creating account, you agree to Quantum's policy and terms of
              use.
            </span>
            <div className="register__submit">
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
