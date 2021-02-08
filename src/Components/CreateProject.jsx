// import React from 'react';
import React, { useState } from 'react';


function CreateProject() {

    // fetch api post link and set state 
    const axios = require ("axios");
    const url = "https://morning-taiga-97781.herokuapp.com";

    const initialState = {
        image: '',
        author: '',
        projectTitle: '',
        description: '',
        projectCategory: '',
        materials:'',
        budget:'',
        video:'',
        gallery:'',
        comments:'',

        // "image" :
        // "author" :
        // "title" : 
        // "description" :
        // "category" : 
        // "materials" :,
        // "budget" : 

        // "video" : {
        //     "href" :
        // },
        // "gallery" : 
        // "comments" :
    };

    const [formState, setFormState] = useState(initialState);

    function createProject() {
        axios
            .post(`${url}/project/addproject`, formState)
            .cath((err) => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createProject(formState)
        console.log(formState);
        setFormState(initialState);
    };

    const handleChange = (event) => {
        setFormState({...setFormState, [event.target.id]: event.target.value})
    }

    // --------------------    Upload an image    --------------------

    // attach a 'ref' to the 'img' we created where we can display the uploaded image using the 'useRef()' hook below
    const uploadeImage = React.useRef(null);

    //handle image upload function
    const handleImageUpload = event => {
        const [file] = event.target.files;
        if (file) {
            console.log(file);
            // Use the 'FileReader' constructor in order to read the content of the file and will attach the content to the 'img' we attache the 'ref' to
            const reader = new FileReader();
            const {current} = uploadeImage
            current.file = file;
            reader.onload = (event) => {
                current.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    // --------------------  ^^^  Upload an image  ^^^  --------------------

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

            <label htmlFor="author">Author:</label>
            <input type="text"
                   id="title"
                   onChange={handleChange}
                   value={formState.author}/>
            
            <label htmlFor="projectTitle">Title:</label>
            <input type="text"
                   id="title"
                   onChange={handleChange}
                   value={formState.projectTitle}/>

            <label htmlFor="description">Description:</label>
            <textarea 
                    id="description" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    value={formState.description}>
                    
            </textarea>

            <label htmlFor="materials">Materials:</label>
            <textarea 
                    id="materials" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    value={formState.materials}>
                    
            </textarea>

            <label htmlFor="budget">Budget:</label>
            <input type="text"
                   id="budget"
                   onChange={handleChange}
                   value={formState.budget}/>

            {/* ------- input for an image on client side ------- */}
            {/* <input type="file" accept="image/*" onchange={handleImageUpload}/> */}

            {/* ------- create a container where the image will be displayed ------- */}
            {/* <div style={{height: "60px", width: "60px", border: "2px dashed black"}}>

                <img 
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }}
                />

            </div> */}

            <button type="submit">POST</button>

        </form>

    );

}

export default CreateProject;