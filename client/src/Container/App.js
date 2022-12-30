import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateOne from "../Pages/Create/Create";
import Home from "../Pages/Home/Home";
import Onstart from "../Pages/Onstart/onStart";
import Register from "../Pages/Register/Register";
import OnBoard from "../Pages/Onboard/onBoard";
import Profile from "../Pages/Profile/Profile";
// import PrivateRoute from "../Routes/PrivateRoutes";
import * as routes from "../Constants/routes";
import Story from "../Pages/Story/Story";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ONSTART} element={<Onstart />} />
        <Route path={routes.CREATEONE} element={<CreateOne />} />
        <Route path={routes.REGISTER} element={<Register />} />
        <Route path={routes.ONBOARD} element={<OnBoard />} />
        <Route path={routes.PROFILE} element={<Profile />} />
        <Route path={routes.STORY} element={<Story />} />
      </Routes>
    </Router>
  );
}
