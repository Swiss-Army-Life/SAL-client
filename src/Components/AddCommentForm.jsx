import React, { useState } from "react";

function AddCommentForm({ setAddComment, id }) {
  const [formData, setFormData] = useState(null);
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  function postComment() {
    axios
      .post(`${url}/project/addcomment/${id}`, formData)
      .catch((err) => console.log(err));
  }
  //
  //
  function handleSubmit() {
    postComment(formData);
    setAddComment(false);
    window.location.reload();
  }
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input name="username" placeholder="username" onChange={handleChange} />
        <label htmlFor="text">message</label>
        <input name="text" onChange={handleChange} />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default AddCommentForm;
