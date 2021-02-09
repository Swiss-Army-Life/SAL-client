import React, { useState, useEffect } from "react";
import CommentDelete from "./CommentDelete";

function Comments({ comments, id }) {
  const [filteredComments, setFilteredComments] = useState([]);
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  //
  //
  //
  async function getComments() {
    const results = await axios.get(`${url}/project/comments`);
    setFilteredComments(
      results.data.filter((comment) => comment.project === id)
    );
  }

  useEffect(() => {
    getComments();
  }, []);

  if (filteredComments.length > 0) {
    return (
      <div>
        <ul>
          {filteredComments.map((comment) => {
            return (
              <li key={comment._id}>
                <p>{comment.text}</p>
                <h5>{comment.username}</h5>
                <CommentDelete id={comment._id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return <></>;
}

export default Comments;
