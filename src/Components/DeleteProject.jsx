import React from "react";

function DeleteProject({ id }) {
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  function deleteProject() {
    axios.delete(`${url}/project/${id}`).then(() => window.location.reload());
  }
  return (
    <div>
      <button onClick={deleteProject}>delete</button>
    </div>
  );
}

export default DeleteProject;
