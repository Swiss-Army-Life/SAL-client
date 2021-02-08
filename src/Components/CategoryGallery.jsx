import React, { useContext } from "react";
import SearchContext from "./SearchContext";

const CategoryGallery = () => {
  const url = "https://morning-taiga-97781.herokuapp.com/project/cat";
  const { searchComplete, setSearchResults, setSearchComplete } = useContext(
    SearchContext
  );
  const categories = [
    "Kitchen",
    "Lighting",
    "Furniture",
    "Ceramics",
    "Food",
    "Gardening",
  ];
  async function getsData(category) {
    const result = await fetch(`${url}/${category}`);
    const resultjson = await result.json();
    setSearchResults(resultjson);
    setSearchComplete(true);
  }

  if (searchComplete === false) {
    return (
      <div className="catbut">
        {categories.map((category) => {
          return (
            <button
              onClick={() => {
                getsData(category);
              }}
            >
              <h1>{category}</h1>
            </button>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default CategoryGallery;
