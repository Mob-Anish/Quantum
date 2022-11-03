import "./Register.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as routes from "../../Constants/routes";
import * as userAction from "../../Actions/userActions";
import { validation } from "../../Utils/formValidation";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { currentTime } from "../../Utils/date";

const register = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [tagline, setTagline] = useState("");
  const [uiError, setUiError] = useState("");

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const decoded = jwt_decode(params.token);
  const { name, email } = decoded;

  const userRegisterData = useSelector((state) => state.userRegister);
  const { success, error } = userRegisterData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = validation(fullName, userName, email);
    if (errors) setUiError(errors);
    setTimeout(() => setUiError(""), 2500);

    dispatch(
      userAction.register(
        name ? name : fullName,
        userName,
        email,
        tagline ? tagline : null
      )
    );
  };

  useEffect(() => {
    if (success) {
      navigate(routes.HOME);
    }
  }, [success]);

  return decoded && decoded.exp > currentTime ? (
    <div className="register">
      <div className="register__background">
        <div className="quantum__logo">
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
          <form className="register__form__field" onSubmit={handleSubmit}>
            <div className="form--field">
              <div className="input__field">
                <label htmlFor="fullname">Full Name *</label>
                <input
                  type={"text"}
                  name="fullname"
                  className="inlinefont focus"
                  placeholder="Write your name . . ."
                  value={name ? name : fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoFocus
                />
                <div className="error-field">
                  {name ? "Changing name will make your gmail useless 😅" : ""}
                  {uiError ? uiError.fullName : ""}
                </div>
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
                <div className="error-field">
                  {uiError ? uiError.userName : ""}
                  {error ? error.username : ""}
                </div>
              </div>
            </div>
            <div className="input__field">
              <label htmlFor="emailaddress">Email Address *</label>
              <input
                type={"text"}
                name="emailaddress"
                className="inlinefont focus"
                placeholder="hmm"
                value={email}
                readOnly
              />
              <div className="error-field">{uiError ? uiError.email : ""}</div>
            </div>
            <div className="input__field tagline--field">
              <label htmlFor="tagline">Tell us about what you are:</label>
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
            <span
              className="privacy--policy text--color"
              style={{
                color: "#ffffff",
                fontSize: "1.6rem",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              By creating account, you agree to Quantum's policy and terms of
              use.
            </span>
            <div className="register__submit">
              <button type="submit" className="submit--button">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="register__error">
      <h1>The link has been expired or not supported in the system 😅</h1>
    </div>
  );
};

export default register;
