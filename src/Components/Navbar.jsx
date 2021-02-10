import React, { useContext } from "react";
import SearchContext from "./SearchContext";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { setSearchComplete } = useContext(SearchContext);

  const resetPage = () => {
    setSearchComplete(false);
  };
  return (
    <div className="nav">
      {/* <Link to="/">
        <button onClick={resetPage}>HOME</button>
      </Link>

      <Link to="/addproject">
        <button>CREATE</button>
      </Link> */}
      <Link to="/" onClick={resetPage}>
        <p>HOME</p>
      </Link>

      <Link to="/addproject">
        <p> CREATE</p>
      </Link>
    </div>
  );
}

export default Navbar;
