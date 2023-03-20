import "./Settings.css";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const activeUiData = useSelector((state) => state.activeUI);

  const activeFeed = () => {
    dispatch({ type: activeConstants.ACTIVE_FEED });
  };

  const activeExplore = () => {
    dispatch({ type: activeConstants.ACTIVE_EXPLORE });
  };

  const activeAbout = () => {
    dispatch({ type: activeConstants.ACTIVE_ABOUT });
  };

  const clearActive = () => {
    dispatch({ type: activeConstants.ACTIVE_RESET });
  };

  return (
    <div className="quantum__settings_--container">
      <div className="settings__navbar" style={{ padding: "2rem" }}>
        <div className="logo" style={{ marginBottom: "5rem" }}>
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <h2 style={{ fontSize: "2.3rem", marginBottom: "3rem" }}>
          Settings 🧑‍🔧
        </h2>
        <div className="navbar__links">
          <ul>
            <li
              className={activeUiData.activeFeed ? "navbar__active" : ""}
              onClick={activeFeed}
            >
              <div className="navbar__feed">
                <span>Profile Settings</span>
              </div>
            </li>
            <li
              className={activeUiData.activeExplore ? "navbar__active" : ""}
              onClick={activeExplore}
            >
              <div className="navbar__explore">
                <span>Account</span>
              </div>
            </li>
            <li
              className={activeUiData.activeAbout ? "navbar__active" : ""}
              onClick={activeAbout}
            >
              <div className="navbar__about">
                <span>About</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings__main"></div>
    </div>
  );
};

export default Settings;
