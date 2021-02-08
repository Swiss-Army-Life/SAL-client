import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar-Container">
      <div>
        {/* <a href="www.ourhomepahelinkwhenwehaveone.com">Home</a> */}
        <Link to="/addproject">Create Project</Link>
      </div>
    </div>
  );
}

export default Navbar;
