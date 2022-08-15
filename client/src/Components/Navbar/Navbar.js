import "./Navbar.css";
import * as routes from "../../Constants/routes";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const year = new Date().getFullYear();

const Navbar = () => {
  return (
    <div className="quantum__navbar__bg">
      <div className="quantum__navbar">
        <div className="navbar__logo">
          <span>Quantum</span>
        </div>
        <div className="navbar__links">
          <ul>
            <li className="navbar__active">
              <div className="navbar__feed">
                <span>My Feed</span>
              </div>
            </li>
            <li>
              <div className="navbar__explore">
                <span>Explore</span>
              </div>
            </li>
            <li>
              <div className="navbar__feed">
                <span>My Feed</span>
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
