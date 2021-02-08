// import React from 'react';
import React, { useState } from 'react';


function CreateProject() {

    // fetch api post link and set state 
    const axios = require ("axios");
    const url = "https://morning-taiga-97781.herokuapp.com";

    // const initialState = {
    //     image: '',
    //     author: '',
    //     projectTitle: '',
    //     description: '',
    //     projectCategory: '',
    //     materials:'',
    //     budget:'',
    //     video:'',
    //     gallery:'',
    //     comments:''
    // };

    const [formState, setFormState] = useState({});
    // const [materialState, setMaterialState] = useState([])

    function createProject() {
        axios
            .post(`${url}/project/addproject`, formState)
            .catch((err) => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createProject(formState)
        console.log(formState);
        console.log(materialState)
        // setFormState(initialState);
    };

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        // console.log(formState)
    }

    // const handleMaterialsChange = (event) => {
    //     setMaterialState([...materialState, event.target.value])
    // }

    return (

        <form onSubmit = {handleSubmit}>

            <label htmlFor="image">Image:</label>
                        <input type="text"
                            id="image"
                            onChange={handleChange}/>


            <label htmlFor="category">Category:</label>
            <select id="category" onChange={handleChange}>
                <option value="Ceramics">Ceramics</option>
                <option value="Food">Food</option>
                <option value="Furniture">Furniture</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Lighting">Lighting</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="author">Author:</label>
            <input type="text"
                   id="author"
                   onChange={handleChange}/>
            
            <label htmlFor="title">Title:</label>
            <input type="text"
                   id="title"
                   onChange={handleChange}/>

            <label htmlFor="description">Description:</label>
            <textarea 
                    id="description" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}>
                    
            </textarea>

            <label htmlFor="materials">Materials:</label>
            <textarea 
                    id="materials" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}>
                    
            </textarea>


            {/* <label htmlFor="materials">Materials:</label>
            <textarea 
                    id="materials1" 
                    cols="30" 
                    rows="1"
                    onChange={handleChange}>        
            </textarea>
            <textarea 
                    id="materials2" 
                    cols="30" 
                    rows="1"
                    // value= {formState.materials}
                    onChange={handleChange}>        
            </textarea> */}


            <label htmlFor="budget">Budget:</label>
            <input type="text"
                   id="budget"
                   onChange={handleChange}/>

            <label htmlFor="video">Video:</label>
                        <input type="text"
                            id="budget"
                            onChange={handleChange}/>

            <button type="submit">POST</button>

        </form>

    );

}

export default CreateProject;