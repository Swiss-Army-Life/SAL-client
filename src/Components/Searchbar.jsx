import React, { useState, useContext } from "react";
import SearchContext from "./SearchContext";

function Searchbar() {
  // imported context
  const { setSearchResults, setSearchComplete } = useContext(SearchContext);

  // user input
  const [searchString, setSearchString] = useState("");

  // api searcher function
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";
  function getResults(searchString) {
    const result = axios.get(`${url}/project/search/${searchString}`);
    return result;
  }

  // when user clicks search button
  function handleSubmit(event) {
    event.preventDefault();
    setSearchString(event.target.value);
    getResults(searchString).then((result) => {
      setSearchResults(result.data);
      setSearchComplete(true);
    });
  }

  // when user types into form
  function handleChange(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="searchTerm"
          type="text"
          // id="input"
          placeholder="What are we making?"
          name="searchterm"
          onChange={handleChange}
          required
        />
        <button type="submit" className="searchButton">
          search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
