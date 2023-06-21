import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import Login from "./login";
import Register from "./register";
import HomePage from "./home";
import Account from "./account";
import Configuration from "./configuration";
import { isAuthenticated } from "./auth";

const Home = () => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : window.location.assign("/");
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/homePage"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="/configuration"
          element={
            <PrivateRoute>
              <Configuration />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Home;

//
