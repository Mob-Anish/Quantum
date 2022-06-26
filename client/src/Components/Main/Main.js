import "./Main.css";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const main = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="main">
      <div className="main__search__bar">
        <input
          type={"text"}
          name="search"
          className="search"
          placeholder="Explore the world"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <IoSearchOutline className="search__icon" />
      </div>
      <div className="main__content">
        <span>Content</span>
      </div>
    </div>
  );
};

export default main;
