import React from "react";
import Login from "./Signin/Login";
import "./Signinpage.css";
function Signinpage(props) {
  return (
    <div className="loginpage">
      <Login auth={props.auth} input={props.input} />
    </div>
  );
}

export default Signinpage;
