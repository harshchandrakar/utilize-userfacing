import "./App.css";
import { useState } from "react";
import User from "./Component/User";
import Cards from "./-f/src/Components/UI/Card";
import Signinpage from "./Component/Signinpage";
function App() {
  const [auth, setAuth] = useState(0);
  const [profiledata, setaprofileadata] = useState();
  const profilehandler = (i) => {
    setaprofileadata(i);
  };
  const authHandler = () => {
    setAuth(true);
  };

  const authLogoutHandler = () => {
    setAuth(false);
  };
  return (
    // <div className="App">
    //   {auth ? (
    //     <User auth={authLogoutHandler} profile={profiledata} />
    //   ) : (
    //     <Signinpage auth={authHandler} input={profilehandler} />
    //   )}
    // </div>
    <Cards />
  );
}

export default App;
