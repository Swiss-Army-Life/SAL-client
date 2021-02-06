import React, { useState, useEffect } from "react";

function Comments({ comments }) {
  const [commentData, setCommentData] = useState([]);
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  async function getComments() {
    const results = await axios.get(`${url}/project/comments`);
    setCommentData(results.data);
  }
  console.log(commentData);
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default Comments;
