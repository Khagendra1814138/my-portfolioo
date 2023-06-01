import React from "react";

import "../Styles/Projects.css";
// import ProfileImage from "../Images/Profile.png";
import EndangeredSpeciesCover from "../Images/projectsImage/endangeredSpecies.PNG"

// import ProjectItem from "./Project/projectItem";
// import {ProjectList} from "../Pages/Project/ProjectList"
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="projects">

            <h1><span>03.</span> PROTFOLIO PROJECTS</h1>

            <section className="canvasFrame">
                <column className="column1">
                    <div className="topStick"></div>
                    <div className="topStick"></div>
                </column>

                <column className="column2">
                    <div className="topTopSupport"></div>
                    <div className="topSupport">
                        <span></span>
                        <span></span>
                    </div>

                    <div className="canvas">
                        
                        {/* {ProjectList.map((project) => {
                            return <ProjectItem name={project.projectName} image={project.projectImage}/>
                        })} */}


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${EndangeredSpeciesCover})`}}></image>
                                <h2>Endangered Species</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 2</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 2</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 3</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>
                        
                    </div>

                    <div className="centerSupport">
                        <span></span>
                        <span></span>
                    </div>
                </column>


                <column className="column3">
                    <div className="leftStick"></div>

                    <div className="centerRow">
                        <div className="bottomCenterStick"></div>
                        <div className="bottomCenterStick"></div>
                        <div className="bottomStick"></div>
                        
                    </div>
                    
                    <div className="rightStick"></div>
                    
                </column>
            </section>

        </div>

    );
}

export default Projects;