import React from "react";

function CommentDelete({ id }) {
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  function deleteComment() {
    axios
      .delete(`${url}/project/deletecomment/${id}`)
      .then(() => window.location.reload());
  }
  return (
    <div>
      <button onClick={deleteComment}>delete</button>
    </div>
  );
}

export default CommentDelete;
