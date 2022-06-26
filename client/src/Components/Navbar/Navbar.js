import "./Navbar.css";

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
      </div>
    </div>
  );
};

export default Navbar;
