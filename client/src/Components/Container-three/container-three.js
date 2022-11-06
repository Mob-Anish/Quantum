import "./container-three.css";
import { Link } from "react-router-dom";
import ProfleImg from "../../Assets/img/prof.png";
import { RiDeleteBack2Fill } from "react-icons/ri";
import * as routes from "../../Constants/routes";
import * as displayFn from "../../Utils/displayFn";
import { wordBreak } from "../../Utils/wordBreak";
import { useSelector } from "react-redux";

const containerThree = () => {
  const userLoginData = useSelector((state) => state.userLogin);

  const { userInfo, success, message } = userLoginData;

  return (
    <div className="container__three">
      <div className="container__three__profile">
        <div className="container__write__blog">
          <Link to={userInfo ? `${routes.CREATEONE}` : `${routes.ONSTART}`}>
            Create
          </Link>
        </div>
        {userInfo || success ? (
          <div className="container__profile__user">
            <h3>{wordBreak(userInfo, message)}</h3>
            <div className="user__profile__card" style={{ display: "none" }}>
              <RiDeleteBack2Fill
                style={{
                  fontSize: "2.5rem",
                  position: "absolute",
                  right: "1px",
                  top: "0",
                  cursor: "pointer",
                  color: "#f3f1f1",
                }}
                onClick={displayFn.hideProfile}
              />
              <Link
                to={routes.ONSTART}
                className="user__profile__name"
                style={{
                  padding: "1.5rem",
                }}
              >
                <h3>{userInfo ? userInfo.name : message.name}</h3>
                <h4>({userInfo ? userInfo.username : message.username})</h4>
              </Link>
              <Link to={routes.ONSTART} className="user__account__settings">
                <h3>Account Settings</h3>
              </Link>
              <div className="user__logout">
                <h3>Log out</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="container__profile__login">
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
                <div
                  className="container__login"
                  style={{ paddingLeft: "1rem" }}
                >
                  <Link to={routes.ONSTART}>Log in</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="container__trending">
        <h2>Trending Tags</h2>
      </div> */}
    </div>
  );
};

export default containerThree;
