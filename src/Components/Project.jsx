import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import UserGallery from "./UserGallery";

function Project({ match }) {
  const [project, setProject] = useState(null);

  // GET specific project from api
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  async function getProject({ match }) {
    const result = await axios.get(`${url}/project/${match.params.id}`);
    return result;
  }

  // on page load
  useEffect(() => {
    getProject({ match }).then((result) => setProject(result.data));
  }, []);

  if (project !== null) {
    return (
      <>
        <iframe
          title={`${project.title}`}
          width="560"
          height="315"
          src={`${project.video.href}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1>{project.title}</h1>
        <h3>{project.author}</h3>
        <p>{project.description}</p>
        <p>You'll probably need the following:</p>
        <ul className="materials">
          {project.materials.map((e) => {
            return (
              <li className="material" key={e}>
                {e}
              </li>
            );
          })}
        </ul>
        <Comments comments={project.comments} props={project._id} />
        <UserGallery images={project.gallery} />
      </>
    );
  }
  return <div></div>;
}

export default Project;
