import "./Main.css";
import { useState } from "react";
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
        <span>Content</span>
      </div>
    </div>
  );
};

export default main;
