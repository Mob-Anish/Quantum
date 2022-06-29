import "./onStart.css";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { useState } from "react";
import * as displayFn from "../../Utils/displayFn";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const onStart = () => {
  const successResponse = (googleData) => {
    console.log(googleData);
  };

  const failureResponse = (result) => {
    console.log(result);
  };

  const [emailLink, setEmailLink] = useState("");

  return (
    <div className="section__onstart">
      <div className="section__continue_with">
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
            <button
              style={{
                background: "green",
                padding: "1.2rem 2rem",
                color: "#ffffff",
                borderRadius: "1.5rem",
                fontSize: "1.8rem",
                cursor: "pointer",
                fontWeight: "bold",
                width: "13rem",
                textAlign: "center",
                border: "none",
              }}
            >
              Submit
            </button>
          </form>
          <div
            className="section_continue_more_options"
            style={{
              marginTop: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={displayFn.displayLoginOptions}
          >
            <BsFillArrowLeftCircleFill
              style={{
                color: "#ffffff",
                fontSize: "1.8rem",
                marginRight: ".5rem",
              }}
            />
            <h2
              style={{
                color: "#ffffff",
                fontSize: "1.8rem",
              }}
            >
              More options
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onStart;
