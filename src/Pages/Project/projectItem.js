import React from "react";
import "./projectItem.css"
import {useNavigate} from "react-router-dom";
// import { Link } from "react-router-dom";

function ProjectItem ({name, image}){
    // const navigate = useNavigate;

    return (


        <div 
            className="projectCardFrame" 
            onClick={() => {
                navigate("/projects/" + id);
            }}
        >

            
            <div className="projectCard">
                <image style={{backgroundImage: `url(${image})`}}></image>
                <h2>  {name} </h2>
            </div>
            <div className="projectCardShadow"></div>
        </div>

    );
}

export default ProjectItem;