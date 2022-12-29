import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as routes from "../Constants/routes";

const PrivateRoute = ({ component: Component }) => {
  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo } = userAuthData;

  if (userInfo) {
    return <Component />;
  }

  return <Navigate to={routes.ONSTART} />;
};

export default PrivateRoute;
