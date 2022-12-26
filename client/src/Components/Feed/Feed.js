import "./Feed.css";
import ProfleImg from "../../Assets/img/prof.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="quantum__feed">
      <div className="user__feed">
        <div className="user__feed--container">
          <div className="user__feed--profile">
            <Link to="/" className="feed__img">
              <img
                src={ProfleImg}
                alt="profile--icon"
                style={{
                  height: "4.9rem",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Link>
            <div className="feed__name--username">
              <Link to="/" className="user__feed--name">
                <h3 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>
                  Hinata Shoyo
                </h3>
              </Link>
              <div className="feed__username--date">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  <span
                    className="user__feed--username"
                    style={{ fontSize: "1.5rem" }}
                  >
                    @Shoyo
                  </span>
                </Link>
                <span style={{ fontWeight: "700" }}>.</span>
                <Link
                  to="/"
                  className="user__feed--date"
                  style={{ marginLeft: "1rem" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="user__feed--content"></div>
          {/* <div className="user__feed--reaction"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
