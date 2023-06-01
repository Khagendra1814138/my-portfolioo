import React from "react";
import { Link } from "react-router-dom";



import "./projectEndangeredSpecies.css";


import EndangeredSpeciesCover from "../../Images/projectsImage/endangeredSpecies.PNG";
import MernStackIcon from "../../Images/skillsIcons/mernStackIcon.png"
import HtmlIcon from "../../Images/skillsIcons/htmlIcon.png";
import CssIcon from "../../Images/skillsIcons/cssIcon.png";
import JsIcon from "../../Images/skillsIcons/jsIcon.png";
import MiroIcon from "../../Images/skillsIcons/miroIcon.png";
import PhotopeaIcon from "../../Images/skillsIcons/photopeaIcon.png";

import GithubIcon from "../../Images/skillsIcons/githubIcon.png";
import PlayIcon from "../../Images/skillsIcons/playIcon.png";

function ProjectEndangeredSpecies (){


    return (
        <div className="endangeredSpecies"> 
            <h1>Endangered Species</h1>

            <image style={{backgroundImage: `url(${EndangeredSpeciesCover})`}} className="projectImage"></image>
            
            <div className="skillsFrame"> 
                <h2> <span>01. </span>SKILLS</h2>

                <div className="skills">
                    <span>HTML
                        <image style={{backgroundImage: `url(${HtmlIcon})`}}></image>
                    </span>

                    <span>CSS
                        <image style={{backgroundImage: `url(${CssIcon})`}}></image>
                    </span>

                    <span>Javascript
                        <image style={{backgroundImage: `url(${JsIcon})`}}></image>
                    </span>

                    <span>MEARN
                        <image style={{backgroundImage: `url(${MernStackIcon})`}}></image>
                    </span>

                    <span>Miro Board
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </span>

                    <span>Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </span>
                </div>


                <div className="projectLinks">
                    <Link exact to="https://github.com/Khagendra1814138/endangered-species" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${GithubIcon})`}}></image>
                        </div>
                    </Link>

                  
                    <Link exact to="https://www.google.co.uk/" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                        </div>
                    </Link>
                </div>

            </div>

            <h2> <span>02. </span>About this Project</h2>

            <section className="aboutSecton">

                <div className="windowFrame"> This is the window/Curtin.
                    <div className="windowDoorL"></div>
                    <div className="windowDoorR"></div>
                </div>

                <div className="cameraLenseFrame"> Camera Open Lense.
                    <div className="coverTL"></div>
                    <div className="coverTR"></div>
                    <div className="coverBL"></div>
                    <div className="coverBR"></div>
                </div>

            </section>
            
        </div>
    );
}

export default ProjectEndangeredSpecies;