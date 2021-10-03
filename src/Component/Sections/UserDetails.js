import React from "react";
import Logout from "../Signin/Logout";
import "./UserDetails.css";
function UserDetails(props) {
  const profile = props.profile;

  return (
    <div className="user-detail">
      <div className="img">
        <img src="" alt="Profile" />
      </div>
      <div className="details">
        <h3>
          <span>Username: </span> {profile.name}
        </h3>
        <h3>
          <span>Email:</span> {profile.email}
        </h3>
        <br />
        <Logout auth={props.auth} />
      </div>
    </div>
  );
}

export default UserDetails;
