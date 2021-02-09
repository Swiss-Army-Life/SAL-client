import React from "react";

//install react-router-dom and import
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav">
      <Link to="/">HOME</Link>

      <Link to="/addproject">CREATE PROJECT</Link>
    </div>
  );
}

export default Navbar;
