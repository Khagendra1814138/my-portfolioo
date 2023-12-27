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

import endangeredSpeciesDesign2 from "../Images/projectsImage/endangeredSpeciesDesign2.PNG";
import EcommerceDesign3 from "../Images/projectsImage/EcommerceDesign3.PNG";
import KelangFigmaDesign2 from "../Images/projectsImage/KelangFigmaDesign2.PNG";

function Projects() {

    const { ref: col1Ref, inView: col1IsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "650px",
    });

    const { ref: col3Ref, inView: col3IsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    return (
        <div className="projects">

            <h1><span>03.</span> FRONT-END PROJECTS</h1>

            <section className="canvasFrame">
                <column ref={col1Ref} className={`${'column1'} ${col1IsVisible ? "showAnimate" : ' '}`}>
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


                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}>

                                </image>
                                <h2>Name 3</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}>

                                </image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
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


            <h1><span>03.1</span> UI/UX DESIGN PROJECTS</h1>

            <section className="sketchBookWrapper">
                <div className="backgroundFrame">
                    <div className="sketchBookDesignFrame">
                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>

                        <div className="bookringFrame">
                            <div className="hole">
                                <div className="hook"></div>
                            </div>
                        </div>
                    </div>


                    <div className="sketchCanvas">
                        <Link exact to="https://miro.com/app/board/uXjVObVI6_k=/?share_link_id=259917343989" target="_blank" className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${endangeredSpeciesDesign2})`}}></image>
                                <h2>Endangered Species Wireframe</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="https://www.figma.com/file/EUbXOr1NI6dt0zNz9vwCMT/Creps-Check-ECommerce?type=design&node-id=0%3A1&mode=design&t=FYQSdlcFzzFqPcdv-1" target="_blank" className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${EcommerceDesign3})`}}></image>
                                <h2>Creps Check Figma Design</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="https://www.figma.com/file/veXIbF7HltJTiDdWPJAswo/Kelang-UI-layout-design?type=design&node-id=0%3A1&mode=design&t=u3jxkpTlzRFrq3zJ-1" target="_blank" className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${KelangFigmaDesign2})`}}></image>
                                <h2>Kelang Figma Design</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 3</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>


                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>

                        <Link exact to="../https://www.google.co.uk/"  className="projectCardFrame">
                            <div className="projectCard">
                                <image style={{backgroundImage: `url(${"ProfileImage"})`}}></image>
                                <h2>Name 4</h2>
                            </div>
                            <div className="projectCardShadow"></div>
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Projects;