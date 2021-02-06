import React, { useState, useEffect } from "react";
import AddCommentForm from "./AddCommentForm";

function Comments({ comments }, props) {
  const [commentsArray, setCommentsArray] = useState([]);
  const [addComment, setAddComment] = useState(false);

  // on load grab comments
  useEffect(() => {
    setCommentsArray(comments);
    console.log(props);
  }, [comments, commentsArray]);

  // trigger comment form to show
  function handleClick() {
    setAddComment(true);
  }
  //
  //
  //
  if (addComment === false) {
    return (
      <div>
        <button onClick={handleClick}>add comment</button>
      </div>
    );
  }
  //
  //
  //
  if (addComment === true) {
    return (
      <>
        <AddCommentForm setAddComment={setAddComment} />
      </>
    );
  }
  return <></>;
}

export default Comments;
