import "./Header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <span>Quantum</span>
      </div>
      <div className="header__search__bar">
        <input type="text" placeholder="Explore" />
      </div>
      <div className="header__write__blog">
        <Link to="/createOne">Create</Link>
      </div>
      <div className="header__profile">
        <div className="img__holder"></div>
        <div className="header__profile__card">
          <h2>Enter the dimension</h2>
          <div className="Signup">
            <Link to="/onstart">Sign up</Link>
          </div>
          <div className="Login">
            <Link to="/onstart">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
