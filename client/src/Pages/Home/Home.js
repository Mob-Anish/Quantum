import "./Home.css";
import { useEffect } from "react";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import ContainerThree from "../../Components/Container-three/container-three";
import * as userConstants from "../../Constants/userConstants";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  // User Verify Data
  const userVerifyData = useSelector((state) => state.userVerify);
  const { message } = userVerifyData;

  useEffect(() => {
    if (message) {
      dispatch({ type: userConstants.USER_VERIFY_RESET });
    }
  }, [message]);

  return (
    <div className="home">
      <Navbar />
      <Main />
      <ContainerThree />
    </div>
  );
};

export default Home;
