import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "./ProjectList"

function ProjectDisplay (){

    const {id} = useParams();
    const project = ProjectList[id];

    return (
        <div className="project">
            <h1> {project.projectName} </h1>
            <image scr={project.projectImage}> </image>
            <p>Skills: {project.skills}</p>
        </div>
    );
}

export default ProjectDisplay;