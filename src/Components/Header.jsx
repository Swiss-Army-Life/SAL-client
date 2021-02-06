import React from "react";
import Logo from "../Images/swiss-diy.png";

function Header(props) {
  return (
    <div>
      <h1>Swiss Army Life</h1>
      <img src={Logo} alt="Tools" />
    </div>
  );
}

export default Header;
