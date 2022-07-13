import "./Register.css";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";

const register = () => {
  return (
    <div className="register">
      <div className="register__background">
        <div className="register__quantum__logo">
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default register;
