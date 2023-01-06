import { Link, useParams } from "react-router-dom";
import * as routes from "../../Constants/routes";
import "./Story.css";
import ProfleImg from "../../Assets/img/prof.png";

const Story = () => {
  const { storyTitle } = useParams();
  console.log(storyTitle);

  return (
    <div className="quantum__story--container">
      <div className="logo" style={{ marginBottom: "5rem" }}>
        <Link to={routes.HOME} style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "2.8rem" }}>Quantum</span>
        </Link>
      </div>
      <div className="content__holder">
        <div className="story__header">
          <div className="profile">
            <div className="image__holder">
              <Link to="/">
                <img
                  src={ProfleImg}
                  className="outer__circle"
                  alt="user__image"
                />
              </Link>
            </div>
            <div className="fullname" style={{ marginLeft: "2rem" }}>
              <Link to="/">
                <h1>Hinata Shoyo</h1>
              </Link>
            </div>
          </div>
          <div className="settings">
            <h1>Settings</h1>
          </div>
        </div>
        <div className="story__header">
          <div className="profile">
            <div className="image__holder">
              <Link to="/">
                <img
                  src={ProfleImg}
                  className="outer__circle"
                  alt="user__image"
                />
              </Link>
            </div>
            <div className="fullname" style={{ marginLeft: "2rem" }}>
              <Link to="/">
                <h1>Hinata Shoyo</h1>
              </Link>
            </div>
          </div>
          <div className="settings">
            <h1>Settings</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
