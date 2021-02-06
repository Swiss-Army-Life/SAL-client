import React, { useState, useEffect } from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";

function CommentSection({ id, comments }) {
  const [commentsArray, setCommentsArray] = useState([]);
  const [addComment, setAddComment] = useState(false);

  // on load grab comments
  useEffect(() => {
    setCommentsArray(comments);
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
        <Comments comments={commentsArray} />
      </div>
    );
  }
  //
  //
  //
  if (addComment === true) {
    return (
      <>
        <AddCommentForm setAddComment={setAddComment} id={id} />
      </>
    );
  }
  return <></>;
}

export default CommentSection;
