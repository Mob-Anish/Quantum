import { Link } from "react-router-dom";
import "./Profile.css";
import * as routes from "../../Constants/routes";

const Profile = () => {
  return (
    <div className="quantum__profile--container">
      <div className="profile__container--sidebar">
        <div className="logo">
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="profile">
          <div className="image-holder shape__outer heptagon">
            <div className="shape__inner heptagon bg-image"></div>
          </div>
          <div className="name"></div>
          <div className="tagline"></div>
        </div>
      </div>
      <div className="profile__container--main">
        <div className="title">
          <h1>Posts</h1>
        </div>
        <div className="posts"></div>
      </div>
    </div>
  );
};

export default Profile;
