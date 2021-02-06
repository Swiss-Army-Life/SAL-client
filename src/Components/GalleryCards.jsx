import React from "react";
import { Link } from "react-router-dom";

function GalleryCards({ projects }) {
  if (projects.data.length > 0) {
    return (
      <>
        {projects.data.map((e) => {
          return (
            <Link to={`project/${e._id}`} key={e._id} className="project-card">
              <li key={e._id} style={{ backgroundImage: `url(${e.image})` }}>
                <h3>{e.title}</h3>
                <h6>{e.category}</h6>
                <p> Project by: {e.author}</p>
                <p>Budget: {e.budget}</p>
              </li>
            </Link>
          );
        })}
      </>
    );
  }

  return <div></div>;
}

export default GalleryCards;
