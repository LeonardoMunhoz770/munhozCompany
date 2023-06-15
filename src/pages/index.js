import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import HomePage from "./home";
import Account from "./account";
import Configuration from "./configuration";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </Router>
  );
};

export default Home;
