import "./Main.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { IoSearchOutline } from "react-icons/io5";

const main = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="main">
      <div className="main__search__bar">
        <div className="main__search__position">
          <IoSearchOutline className="search__icon" />
          <input
            type={"text"}
            name="search"
            className="search inlinefont focus"
            placeholder="Explore the world"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      <div className="main__content">
        <div className="quantum__main__content">
          <div className="quantum__introduction__content">
            <div className="title" style={{ width: "65%" }}>
              <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}>
                <span className="text--color">Create</span> your own shell
                especially for dev community, tech writers and readers.
              </h1>
              <span style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                The free blogging platform for all the tech community around the
                world! Share your ideas with the world, create your own content
                and start blogging ✌️.
              </span>
              <div className="button">
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
            <div className="founder__text">
              <p style={{ fontSize: "1.8rem" }}>
                For everyone out there feel free to come here and explore the
                tech world using the quantum space and express your goddamn
                ideas to your viewers 🙏.
              </p>
              <div className="img-holder"></div>
              <p
                className="text--color"
                style={{ fontSize: "1.8rem", fontWeight: "bold" }}
              >
                Anish Manandhar aka Shoya
              </p>
              <p style={{ fontSize: "1.8rem" }}>Founder, Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
