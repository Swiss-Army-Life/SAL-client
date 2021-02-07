// import React from 'react';
import React, { useState } from 'react';

function CreateProject() {

    // fetch api post link and set state 
    const axios = require ("axios");
    const url = "https://morning-taiga-97781.herokuapp.com";

    const initialState = {
        projectCategory: '',
        projectTitle: '',
        description: '',
    };

    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        setFormState(initialState);
    };

    const handleChange = (event) => {
        setFormState({...setFormState, [event.target.id]: event.target.value})
    }

    return (

        <form onSubmit = {handleSubmit}>

            <label htmlFor="projectCategory">Category:</label>
            <select id="projectCategory" onChange={handleChange} value={formState.projectCategory}>
                <option value="Ceramics">Ceramics</option>
                <option value="Food">Food</option>
                <option value="Furniture">Furniture</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Lighting">Lighting</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="projectTitle">Title:</label>
            <input type="text"
                   id="title"
                   onChange={handleChange}
                   value={formState.projectTitle}/>

            <label htmlFor="description">Description</label>
            <textarea 
                    id="description" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    value={formState.description}>
                    
            </textarea>

            <button type="submit">POST</button>

        </form>

    );

}

export default CreateProject;