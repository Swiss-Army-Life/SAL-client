import React from "react";

function CategoryGallery(props) {
  return <div></div>;
}

export default CategoryGallery;

// import React, { useState, useEffect } from 'react';

// function CategoryGallery() {
//     const [category, setCategory] = useState([]);

//     useEffect(()=> {
//      const url= " https://morning-taiga-97781.herokuapp.com/project/cat/"
//      fetch(url)
//      .then((res) => res.json())
//      .then((json) => {
//          let category = json;
//          setCategory(category);
//      })
//      .catch(console.error);
//     }, []);
//     return (
//         <section className="cats">
//             {category.map((category)=> {
//                 <Link to={`/cat/${category.id}`} key={category.id}>
//                     <div className="cats">
//                     <h3>{category.id}</h3>
//                     </div>

//                 </Link>
//             })}

//         </section>
//     );
// }

// export default CategoryGallery;
