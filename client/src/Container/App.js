import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import * as routes from "../Constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
