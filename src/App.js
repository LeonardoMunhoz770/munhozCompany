import Home from "./pages";
import Global from "./styles/global";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAOlT14t6xitBu_KhE-x83ELFQU5hXOB0s",
    authDomain: "munhozproject.firebaseapp.com",
    projectId: "munhozproject",
    storageBucket: "munhozproject.appspot.com",
    messagingSenderId: "208927359389",
    appId: "1:208927359389:web:449b0eac9c5515b2b86f74",
    measurementId: "G-8GJ5GE4HPQ",
  };
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
