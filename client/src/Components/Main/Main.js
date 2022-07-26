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
            <div className="title">
              <h1>
                Create your own shell especially for dev community, tech writers
                and readers.
              </h1>
              <h2>
                The free blogging platform for all the tech community around the
                world!
              </h2>
              <h2>
                Share your ideas with the world, create your own content and
                start blogging ✌️.
              </h2>
              <Link to={routes.ONSTART}>Start</Link>
            </div>
          </div>
          <div className="quantum__founder__note">
            <div className="founder__text">
              <p>
                For everyone out there feel free to come here and explore the
                tech world using the quantum space and express your goddamn
                ideas to your viewers 🙏.
              </p>
              <div className="img-holder"></div>
              <p>Anish Manandhar aka Shoya</p>
              <p>Founder, Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
