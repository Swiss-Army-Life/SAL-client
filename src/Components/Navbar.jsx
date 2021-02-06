import React from "react";
//install react-router-dom and import
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navBar-Container">
      <h2>Navbar</h2>

      {/* ---- Link to HOME ---- */}
      <div>
        <Link to="/">HOME</Link>
      </div>

      {/* ---- Link to Create A Project ---- */}
      <div>
        <Link to="/project/addproject">Create Project</Link>
      </div>
    </div>
  );
}

export default Navbar;
