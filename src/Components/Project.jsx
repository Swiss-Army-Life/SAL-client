import React, { useState, useEffect } from "react";
import CommentSection from "./CommentSection";
import UserGallery from "./UserGallery";
import DeleteProject from "./DeleteProject";

function Project({ match }) {
  const [project, setProject] = useState(null);
  const [showProject, setShowProject] = useState(false);
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  // GET specific project from api

  async function getProject(match) {
    const result = await axios.get(`${url}/project/${match.params.id}`);
    setProject(result);
    setShowProject(true);
  }

  // on page load grab the specific project
  useEffect(() => {
    getProject(match);
  }, []);

  if (showProject === true) {
    return (
      <>
        <iframe
          title={`${project.data.title}`}
          width="560"
          height="315"
          src={`${project.data.video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1>{project.data.title}</h1>
        <h3>{project.data.author}</h3>
        <p>{project.data.description}</p>
        <p>You'll probably need the following:</p>
        <ul className="materials">
          {project.data.materials.map((e) => {
            return (
              <li className="material" key={e}>
                {e}
              </li>
            );
          })}
        </ul>
        <DeleteProject id={project.data._id} />
        <CommentSection
          comments={project.data.comments}
          id={project.data._id}
        />
        <UserGallery images={project.data.gallery} />
      </>
    );
  }
  return <div></div>;
}

export default Project;
