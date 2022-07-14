import "./onStart.css";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import * as userAction from "../../Actions/userActions";
import { useState, useEffect } from "react";
import * as displayFn from "../../Utils/displayFn";
import { useDispatch, useSelector } from "react-redux";
import { RiInboxArchiveLine } from "react-icons/ri";
import { validation } from "../../Utils/emailValidation";
import MoreOptions from "../../Components/MoreOptions/moreOptions";

const onStart = () => {
  const successResponse = (googleData) => {
    console.log(googleData);
  };

  const failureResponse = (result) => {
    console.log(result);
  };

  const dispatch = useDispatch();

  const [emailLink, setEmailLink] = useState("");
  const [uiError, setUiError] = useState("");

  const userVerifyData = useSelector((state) => state.userVerify);
  const { success, error } = userVerifyData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client Validation
    const errors = validation(emailLink);
    if (errors) setUiError(errors);
    setTimeout(() => setUiError(""), 2500);

    dispatch(userAction.verify(emailLink));
  };

  return (
    <div className="section__onstart">
      <div className="section__continue__with">
        <div className="section__continue__buttons">
          <div className="section__quantum__logo">
            <Link to={routes.HOME} style={{ textDecoration: "none" }}>
              <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
                Quantum
              </span>
            </Link>
          </div>
          <div
            className="section__continue__title"
            style={{ marginTop: "2.5rem" }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "2.8rem",
                fontWeight: "bold",
              }}
            >
              Sign up / Log in
            </span>
          </div>
          <div className="section__continue__button">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Enter with Google"
              className="google__login"
              onSuccess={successResponse}
              onFailure={failureResponse}
              cookiePolicy={"single_host_origin"}
            />
            <div
              className="section__separation_or"
              style={{ marginBottom: "3rem", textAlign: "center" }}
            >
              <span style={{ fontSize: "1.8rem", color: "#ffffff" }}>Or</span>
            </div>
            <div
              className="section__continue__email"
              onClick={displayFn.displayEmailBox}
            >
              <span>Enter with Email</span>
            </div>
          </div>
          {success ? (
            <div className="section__check__email">
              <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                Check your email for a link to proceed.
              </span>
              <RiInboxArchiveLine
                style={{
                  color: "#ffffff",
                  fontSize: "3rem",
                  marginTop: "1rem",
                }}
              />
              <MoreOptions />
            </div>
          ) : (
            <div  
              className="section__enter__email"
              style={{ display: "none", marginTop: "8rem" }}
            >
              <form
                className="section__enter__email__input"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onSubmit={handleSubmit}
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "2.5rem",
                    color: "#ffffff",
                  }}
                >
                  Sign in using secure link
                </span>
                <input
                  type={"text"}
                  name="email"
                  className="inlinefont focus"
                  value={emailLink}
                  placeholder="Enter your email address . . . ."
                  onChange={(e) => setEmailLink(e.target.value)}
                />
                <div className="error-field">
                  {uiError ? uiError.email : ""}
                  {error ? error.message : ""}
                </div>
                <button type="submit" className="submit_enter_email">
                  Submit
                </button>
              </form>
              <MoreOptions />
            </div>
          )}
        </div>
        <div className="section__onstart__paragraph">
          <p>
            "Quantum is a medium to express and explore the evergoing technology
            world and its development where the devs can create their own shell
            and pass the shell to their fellow ones."
          </p>
          <p>- Anish Manandhar ✌️</p>
        </div>
      </div>
    </div>
  );
};

export default onStart;
