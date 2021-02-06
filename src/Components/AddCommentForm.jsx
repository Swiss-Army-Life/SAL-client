import React, { useState } from "react";

function AddCommentForm(setAddComment) {
  const [formData, setFormData] = useState(null);
  const axios = require("axios");
  const url = "https://morning-taiga-97781.herokuapp.com";

  async function postComment() {}
  //
  //
  //
  function handleSubmit() {
    postComment(formData);
    setAddComment(false);
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
