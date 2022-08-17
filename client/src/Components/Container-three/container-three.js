import "./container-three.css";
import { Link } from "react-router-dom";
import ProfleImg from "../../Assets/img/prof.png";
import { RiDeleteBack2Fill } from "react-icons/ri";
import * as routes from "../../Constants/routes";
import * as displayFn from "../../Utils/displayFn";

const containerThree = () => {
  return (
    <div className="container__three">
      <div className="container__write__profile">
        <div className="container__write__blog">
          <Link to="/createOne">Create</Link>
        </div>
        <div className="container__profile">
          <img
            src={ProfleImg}
            alt="profile--icon"
            style={{
              height: "5rem",
              borderRadius: "50%",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={displayFn.viewProfile}
          />
          <div
            className="container__profile__card"
            style={{ position: "absolute", zIndex: "1000", display: "none" }}
          >
            <RiDeleteBack2Fill
              style={{
                fontSize: "2.5rem",
                position: "absolute",
                right: "5px",
                cursor: "pointer",
                color: "#f3f1f1",
              }}
              onClick={displayFn.hideProfile}
            />
            <h2 style={{ fontSize: "1.8rem", color: "#f3f1f1" }}>
              Enter the dimension of tech.
            </h2>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#f3f1f1",
                paddingTop: ".5rem",
                fontWeight: "normal",
              }}
            >
              Sign up or log in to your Quantum account.
            </h3>
            <div
              className="container__entry"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "2rem 0",
              }}
            >
              <div className="container__signup">
                <Link to={routes.ONSTART}>Sign up</Link>
              </div>
              <div className="container__login" style={{ paddingLeft: "1rem" }}>
                <Link to={routes.ONSTART}>Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container__trending">
        <h2>Trending Tags</h2>
      </div> */}
    </div>
  );
};

export default containerThree;
