import "./Home.css";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import ContainerThree from "../../Components/Container-three/container-three";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <ContainerThree />
    </div>
  );
};

export default Home;
