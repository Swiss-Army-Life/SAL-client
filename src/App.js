import "./App.css";

// component imports
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import CategoryGallery from "./Components/CategoryGallery";
import SearchContext from "./Components/SearchContext.jsx";
import Footer from "./Components/Footer.jsx";
import ProjectsGallery from "./Components/ProjectsGallery";
import Project from "./Components/Project";
import CreateProject from "./Components/CreateProject";

// library functionality
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

function App() {
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchComplete, setSearchComplete] = useState(false);

  return (
    <>
      <Header />
      <SearchContext.Provider
        value={{
          searching,
          setSearching,
          searchResults,
          setSearchResults,
          searchString,
          setSearchString,
          searchComplete,
          setSearchComplete,
        }}
      >
        <Navbar />
        <Route exact path="/">
          <Searchbar />
          <CategoryGallery />
          <ProjectsGallery />
        </Route>
        <Route exact path="/addproject" component={CreateProject} />
        <Route exact path="/project/:id" component={Project} />
      </SearchContext.Provider>
      <Footer />
    </>
  );
}

export default App;
