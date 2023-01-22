import "./Home.css";
import { useEffect } from "react";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import ContainerThree from "../../Components/Container-three/container-three";
import * as userConstants from "../../Constants/userConstants";
import * as activeConstants from "../../Constants/activeConstants";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  // User Verify Data
  const userVerifyData = useSelector((state) => state.userVerify);
  const googleAuthenticateData = useSelector((state) => state.googleAuth);
  const { googleAuth } = googleAuthenticateData;
  const { message } = userVerifyData;

  // User Login Data
  const userLoginData = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginData;

  useEffect(() => {
    if (message) {
      dispatch({ type: userConstants.USER_VERIFY_RESET });
    }

    if (googleAuth) {
      dispatch({ type: userConstants.GOOGLE_AUTH_RESET });
    }

    if (userInfo) {
      dispatch({ type: activeConstants.ACTIVE_FEED });
    }
  }, [message, googleAuth, userInfo]);

  return (
    <div className="home">
      <Navbar />
      <Main />
      <ContainerThree />
    </div>
  );
};

export default Home;
