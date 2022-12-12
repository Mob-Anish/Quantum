import "./mainContent.css";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";

const MainContent = () => {
  return (
    <div className="quantum__main__content">
      <div className="quantum__introduction__content">
        <div className="title" style={{ marginRight: "5rem" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}>
            <span className="text--color">Create</span> your own shell
            especially for dev community, tech writers and readers.
          </h1>
          <span style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            The free blogging platform for all the tech community around the
            world! Share your ideas with the world, create your own content and
            start blogging ✌️.
          </span>
          <div className="button" style={{ width: "17rem" }}>
            <Link to={routes.ONSTART} className="link--button">
              Init Journey 🤙
            </Link>
          </div>
        </div>
        <div className="quantum__introduction__image">
          <div className="img-holder"></div>
        </div>
      </div>
      <div className="quantum__founder__note">
        <div className="founder__profile">
          <div className="img-holder"></div>
        </div>
        <div className="founder__text" style={{ marginLeft: "3rem" }}>
          <p style={{ fontSize: "1.8rem" }}>
            " For everyone out there feel free to come here and explore the tech
            world using the quantum space and express your goddamn ideas to your
            viewers 🙏".
          </p>
          <p
            className="text--color"
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginTop: "1.5rem",
            }}
          >
            Anish Manandhar aka Shoya
          </p>
          <p style={{ fontSize: "1.8rem" }}>Founder, Developer</p>
          <div
            className="button"
            style={{ marginTop: "2.8rem", width: "17.2rem" }}
          >
            <Link to={routes.ONSTART} className="join--button">
              Join the community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
