import React, { useContext } from "react";
import SearchContext from "./SearchContext";

const CategoryGallery = (category) => {
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
      <div className="box-2">
        {categories.map((category) => {
          return (
            <div
              className="btn btn-two"
              // <button
              onClick={() => {
                getsData(category);
              }}
              key={category}
            >
              <span>{category}</span>
              {/* </button> */}
            </div>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default CategoryGallery;
