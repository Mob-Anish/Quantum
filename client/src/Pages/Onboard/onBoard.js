import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../../Actions/userActions";
import * as routes from "../../Constants/routes";

import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const currentTime = Date.now() / 1000;

const onBoard = () => {
  let params = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const decoded = jwt_decode(params.token);
  const { email } = decoded;

  console.log(decoded.exp, currentTime);

  const userLoginData = useSelector((state) => state.userLogin);
  const { success } = userLoginData;

  useEffect(() => {
    if (decoded.email && decoded.exp > currentTime) {
      dispatch(userAction.login(email));
    }

    if (success) {
      navigate(routes.HOME);
    }
  }, [success]);

  return decoded.email && decoded.exp > currentTime ? (
    <div className="section__onboard">
      <h1>Verifying your link</h1>
      <FadeLoader color={"black"} loading={true} css={override} size={50} />
    </div>
  ) : (
    <div className="section__onboard__error">
      <h1>The link has been expired or not supported in the system 😅</h1>
    </div>
  );
};

export default onBoard;
