import React from "react";

import "../Styles/Projects.css";
import '../Animations/Shapes.css';

// import ProfileImage from "../Images/Profile.png";
import EndangeredSpeciesCover from "../Images/projectsImage/endAnimal.jpg";
import Ecommerce from "../Images/projectsImage/ecommerce.jpg";
import KelangCover from "../Images/projectsImage/kelangCover.jpg";

// import ProjectItem from "./Project/projectItem";
// import {ProjectList} from "../Pages/Project/ProjectList"
import { Link } from "react-router-dom";

import { useInView } from 'react-intersection-observer';


function Projects() {

    const { ref: col1Ref, inView: col1IsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "650px",
    });

    const { ref: col2Ref, inView: col2IsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: canvasRef, inView: canvasIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: col3Ref, inView: col3IsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    return (
        <div className="projects">

            <h1><span>03.</span> PROTFOLIO PROJECTS</h1>

            <section className="canvasFrame">
                <column ref={col1Ref} className={`${'column1'} ${col1IsVisible ? "showAnimate" : ' '}`}>
                    <div className="topStick"></div>
                    <div className="topStick"></div>
                </column>

                <column ref={col2Ref} className={`${'column2'} ${col2IsVisible ? "showAnimate" : ' '}`}>
                    <div className="topTopSupport"></div>
                    <div className="topSupport">
                        <span></span>
                        <span></span>
                    </div>

                    <div ref={canvasRef}  className={`${'canvas'} ${canvasIsVisible ? "showAnimate" : ' '}`}>
                        
                        {/* {ProjectList.map((project) => {
                            return <ProjectItem name={project.projectName} image={project.projectImage}/>
                        })} */}


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${EndangeredSpeciesCover})`}}>
                                    <div className="vignette"></div>
                                </image>
                                <h2>Endangered Species</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="/projectEcommerce" className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${Ecommerce})`}}>
                    
                                </image>
                                <h2>Creps Check</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="/projectKelang" className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${KelangCover})`}}>
                                    <div className="vignette"></div>
                                </image>
                                <h2>Ke-Lang</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}>

                                </image>
                                <h2>Name 3</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}>

                                </image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="../projectEndangeredSpecies"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}>
                                    
                                </image>
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


                <column ref={col3Ref} className={`${'column3'} ${col3IsVisible ? "showAnimate" : ' '}`}>
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