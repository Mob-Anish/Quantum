import "./container-three.css";
import { Link, useNavigate } from "react-router-dom";
import ProfleImg from "../../Assets/img/prof.png";
import { RiDeleteBack2Fill } from "react-icons/ri";
import * as routes from "../../Constants/routes";
import * as displayFn from "../../Utils/displayFn";
import { wordBreak } from "../../Utils/wordBreak";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../Actions/userActions";
import { cld } from "../../Utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { imageUrlBreak } from "../../Utils/wordBreak";

const containerThree = () => {
  const navigate = useNavigate();
  const userLoginData = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const { userInfo } = userLoginData;

  const logoutUser = () => {
    dispatch(userActions.logout());
    navigate(routes.HOME);
  };

  return (
    <div className="container__three">
      <div className="container__three__profile">
        <div className="container__write__blog">
          <Link to={userInfo ? `${routes.CREATEONE}` : `${routes.ONSTART}`}>
            Create
          </Link>
        </div>
        {userInfo ? (
          <div className="container__profile__user">
            {userInfo.photo !== null ? (
              <div
                style={{
                  display: "block",
                  height: "4.6rem",
                }}
                className="pointer"
              >
                <img
                  src={cld
                    .image(`${imageUrlBreak(userInfo.photo)}`)
                    // .image(`${imageUrlBreak(userInfo.photo)}`)
                    .resize(
                      fill().width(2500).height(2500).gravity(autoGravity())
                    )
                    .quality("auto")
                    .format("auto")
                    .toURL()}
                  alt="profile--icon"
                  className="prof--image"
                  onClick={displayFn.viewProfile}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ) : (
              <div
                className="user__profile--icon pointer"
                onClick={displayFn.viewProfile}
              >
                <span>{wordBreak(userInfo)}</span>
              </div>
            )}
            <div className="user__profile__card">
              <RiDeleteBack2Fill
                style={{
                  fontSize: "2.5rem",
                  position: "absolute",
                  right: "0",
                  top: "12px",
                  cursor: "pointer",
                  color: "#f3f1f1",
                }}
                onClick={displayFn.hideProfile}
              />
              <div
                className="user__profile__name"
                style={{
                  padding: "1.6rem",
                }}
              >
                <h3>{userInfo.name}</h3>
                <h4>({userInfo.username})</h4>
              </div>
              <div className="user__profile--list">
                <Link
                  to={`${userInfo && userInfo.username}`}
                  className="user__view__profile"
                >
                  <h3>🙅 &nbsp; &nbsp;Profile</h3>
                </Link>
                <Link to={routes.SETTINGS} className="user__account__settings">
                  <h3>⚙️ &nbsp; &nbsp;Account Settings</h3>
                </Link>
                <div className="user__logout pointer" onClick={logoutUser}>
                  <h3>👉 &nbsp; &nbsp;Log out </h3>
                </div>
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
