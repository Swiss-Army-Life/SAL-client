import React from "react";
import Logo from "../Images/life-logo.png";

function Header(props) {
  return (
    <div className="logo">
      <img className="img-logo" src={Logo} alt="Tools" />
    </div>
  );
}

export default Header;
