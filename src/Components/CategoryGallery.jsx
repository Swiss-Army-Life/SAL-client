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

// function CategoryGallery() {
//   const [category, setCategory] = useState("furniture");
//   const [categoryArray, setCategoryArray] = useState([]);

//   const getCat = async (category) => {
//     const url = `https://morning-taiga-97781.herokuapp.com/project/cat/${category}`;
//     console.log(url);
//     const result = await fetch(url);
//     const resultjson = await result.json();
//     console.log(resultjson);
//     setCategoryArray(resultjson);
//   };
//   console.log(category);
//   useEffect(() => {
//     getCat(category);
//   }, []);
//   return (
//     <section className="cats">
//       {categoryArray.map((category) => {
//         console.log(category);
//         return (
//           <div className="cats">
//             <h3>{category.title}</h3>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

export default CategoryGallery;
