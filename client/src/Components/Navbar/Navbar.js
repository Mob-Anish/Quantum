import "./Navbar.css";
import * as routes from "../../Constants/routes";
import { Link } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as activeConstants from "../../Constants/activeConstants";

const year = new Date().getFullYear();

const Navbar = () => {
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
    <div className="quantum__navbar__bg">
      <div className="quantum__navbar">
        <div className="quantum__logo navbar__logo" onClick={clearActive}>
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li
              className={activeUiData.activeFeed ? "navbar__active" : ""}
              onClick={activeFeed}
            >
              <div className="navbar__feed">
                <span>My Feed</span>
              </div>
            </li>
            <li
              className={activeUiData.activeExplore ? "navbar__active" : ""}
              onClick={activeExplore}
            >
              <div className="navbar__explore">
                <span>Explore</span>
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
        <div className="quantum__navbar__footer">
          <div
            className="quantum__social__links"
            style={{ marginBottom: "3rem" }}
          >
            <a href={routes.TWITTER} target="_blank" rel="noopener noreferrer">
              <GrTwitter />
            </a>
            <a
              href={routes.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a href={routes.GITHUB} target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href={routes.LINKEDIN} target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
          </div>
          <div
            className="quantum__navbar__copyright"
            style={{ fontSize: "1.4rem" }}
          >
            &copy; {year} Quantum Anish Manandhar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
