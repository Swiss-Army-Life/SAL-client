import React, { useState, useEffect  } from 'react';
import UpdateProjectForm from './UpdateProjectForm';

function UpdateProjBtn({ id }) {

    const [updateProject, setUpdateProject] = useState(false);

    function handleChangeProj() {
        setUpdateProject(true);
    }
    
    if (updateProject === false) {
        return (
            <div>
                <button onClick={handleChangeProj}>Update Project</button>
            </div>
        );
    }
    if(updateProject === true)
        return (
            <div>
                <UpdateProjectForm setUpdateProject={setUpdateProject} id={id} />
            </div>
        )
}

export default UpdateProjBtn;