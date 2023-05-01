import "./Settings.css";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import * as activeConstants from "../../Constants/activeConstants";

const Settings = () => {
  const dispatch = useDispatch();
  const activeUiData = useSelector((state) => state.activeUI);

  const activeProfileSettings = () => {
    dispatch({ type: activeConstants.ACTIVE_PROFILE_SETTINGS });
  };

  const activeAccount = () => {
    dispatch({ type: activeConstants.ACTIVE_ACCOUNT });
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
          User Settings 🧑‍🔧
        </h2>
        <div className="navbar__links">
          <ul>
            <li
              className={
                activeUiData.activeProfileSetting ? "navbar__active" : ""
              }
              onClick={activeProfileSettings}
            >
              <div className="navbar__feed">
                <span>🙍 &nbsp; &nbsp;Profile Settings</span>
              </div>
            </li>
            <li
              className={activeUiData.activeAccount ? "navbar__active" : ""}
              onClick={activeAccount}
            >
              <div className="navbar__explore">
                <span>⚙️ &nbsp; &nbsp;Account</span>
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
