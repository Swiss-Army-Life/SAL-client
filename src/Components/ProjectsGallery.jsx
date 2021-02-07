import React, { useState, useEffect, useContext } from "react";
import SearchContext from "./SearchContext";
import GalleryCards from "./GalleryCards";

function ProjectsGallery() {
  const { searchResults, searchComplete, setSearchComplete } = useContext(
    SearchContext
  );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (searchComplete === true) {
      setProjects(searchResults);
    }
  }, [searchComplete, projects, searchResults, setSearchComplete]);

  if (searchComplete === true) {
    return (
      <div className="gallery">
        <GalleryCards projects={searchResults} />
      </div>
    );
  }

  return <></>;
}

export default ProjectsGallery;
