import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function GalleryCards({ projects }) {
  if (projects.length > 0) {
    return (
      <div className="gallerylist">
        {projects.map((e) => {
          return (
            <Link to={`project/${e._id}`} key={e._id}>
              <div className="gallerycard" key={e._id}>
                <img src={e.image} alt="" />
                <h3>{e.title}</h3>
                <h6>{e.category}</h6>
                <p> Project by: {e.author}</p>
                <p>Budget: {e.budget}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}
export default GalleryCards;
