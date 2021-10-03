import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.Client_ID;

function Logout(props) {
  const onSuccess = () => {
    props.auth();
    alert("Logout made Sucessfully");
  };
  return (
    <div className="logoutdiv">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
