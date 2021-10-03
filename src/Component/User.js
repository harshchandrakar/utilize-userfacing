import React from "react";
import Navbar from "./Sections/Navbar";
import Orders from "./Sections/Orders";
import UserDetails from "./Sections/UserDetails";
import data from "../static/DummyData.json";
import "./User.css";
function User(props) {
  return (
    <div className="user">
      <Navbar />
      <div className="udetail">
        <UserDetails auth={props.auth} profile={props.profile} />

        <Orders datas={data} />
      </div>
    </div>
  );
}

export default User;
