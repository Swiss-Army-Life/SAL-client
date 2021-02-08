import React from "react";

//install react-router-dom and import
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navBar-Container">
      <div>
        <Link to="/">HOME</Link>
        <Link to="/addproject">Create Project</Link>
      </div>
    </div>
  );
}

export default Navbar;
