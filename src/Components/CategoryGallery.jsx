// import React from "react";

// function CategoryGallery(props) {
//   const categories = `https://morning-taiga-97781.herokuapp.com/project/cat/{$category}`;
//   const cat = props.categories.map((category) => {
//     return <div key={category.id}>{category.id}</div>;
//   });

//   return (
//     <section className="catCards">
//       <h3>{cat}</h3>
//     </section>
//   );
// }

// export default CategoryGallery;

// import React from "react";
// import axios from 'axios';

// function CategoryGallery(props) {
//     axios.get(`https://morning-taiga-97781.herokuapp.com/project/cat/${category}`)
//     .then(res => {
//         const category=
//     })
//   return <div></div>;
// }

// export default CategoryGallery;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const url = `https://morning-taiga-97781.herokuapp.com/project/cat/${category}`;
const categories = ["Kitchen", "Lighting", "Furniture","Ceramics", "Food", "Gardening" ]
const [results, setResults] = useState ({})

const CategoryGallery= (category) => {
  
  const result = fetch(`url${category}`)
  setResults(results)
  setSearchComplete(true) 
}
useEffect(() => {
      getsData(category);
    }, []);
return (
  
  {categories.map((category) => {
    <Link to="/" onClick={getsData(category)}>
    <h1>{categories}</h1>
  </Link>
  
})}















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
