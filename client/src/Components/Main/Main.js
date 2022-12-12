import "./Main.css";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import * as activeConstants from "../../Constants/activeConstants";
import MainContent from "../Main-Content/mainContent";

const main = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const activeUiData = useSelector((state) => state.activeUI);
  const userLoginData = useSelector((state) => state.userLogin);

  const { activeFeed, activeExplore, activeAbout } = activeUiData;
  const { userInfo } = userLoginData;

  useEffect(() => {
    if (userInfo) {
      dispatch({ type: activeConstants.ACTIVE_FEED });
    }
  }, [userInfo]);

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
        {!userInfo && !activeFeed && !activeExplore && !activeAbout ? (
          <MainContent />
        ) : (
          ""
        )}
        {activeFeed ? <h1>This is feed</h1> : ""}
        {activeExplore ? <h1>This is explore</h1> : ""}
        {activeAbout ? <h1>This is about</h1> : ""}
      </div>
    </div>
  );
};

export default main;
