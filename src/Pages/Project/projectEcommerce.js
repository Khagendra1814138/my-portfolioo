import React from "react";
import { Link } from "react-router-dom";

import "./projectEcommerce.css";

import { useInView } from 'react-intersection-observer';

import Back from "../../Images/dalmatian-spots.svg";

import EcommerceCover from "../../Images/projectsImage/Ecommerce.PNG";
import ReactIcon from "../../Images/skillsIcons/reactIcon.png"
import HtmlIcon from "../../Images/skillsIcons/htmlIcon.png";
import CssIcon from "../../Images/skillsIcons/cssIcon.png";
import JsIcon from "../../Images/skillsIcons/jsIcon.png";
import MiroIcon from "../../Images/skillsIcons/miroIcon.png";
import PhotopeaIcon from "../../Images/skillsIcons/photopeaIcon.png";

import GithubIcon from "../../Images/skillsIcons/githubIcon.png";
import PlayIcon from "../../Images/skillsIcons/playIcon.png";

import FontSizeIncreaserImg from "../../Images/projectsImage/fontSizeIncreaser.PNG";

function ProjectEcommerce (){

    const { ref: headerImgRef, inView: headerImgIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: skillsRef, inView: skillsIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: linksRef, inView: linksIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: aboutRef, inView: aboutIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    return (
        <div className="ecommercePage" style={{backgroundImage: `url(${Back})`}} > 
            <h1>Creps Check E-Commerce</h1>

            <image style={{backgroundImage: `url(${EcommerceCover})`}} 
           
                ref={headerImgRef} className={`${'projectImage'} ${headerImgIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}
                >

            </image>
            
            <div className="skillsFrame"> 
                <h2> <span>01. </span>TOOLS USED</h2>

                <div ref={skillsRef} className={`${'skills'} ${skillsIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                    <span>HTML
                        <image style={{backgroundImage: `url(${HtmlIcon})`}}></image>
                    </span>

                    <span>CSS
                        <image style={{backgroundImage: `url(${CssIcon})`}}></image>
                    </span>

                    <span>Javascript
                        <image style={{backgroundImage: `url(${JsIcon})`}}></image>
                    </span>

                    <span>React
                        <image style={{backgroundImage: `url(${ReactIcon})`}}></image>
                    </span>

                    <span>Miro Board
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </span>

                    <span>Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </span>
                </div>


                <div ref={linksRef} className={`${'projectLinks'} ${linksIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                    <Link exact to="https://github.com/Khagendra1814138/e-commerce" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${GithubIcon})`}}></image>
                        </div>
                    </Link>

                  
                    <Link exact to="https://klimbu-e-commerce.netlify.app/" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                        </div>
                    </Link>
                </div>

            </div>

            <h2> <span>02. </span>About this Project</h2>


            <section ref={aboutRef} className={`${'aboutSecton'} ${aboutIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                <p>
                    This is my final year dissertion project.
                    During my research, I have found out that there were lack of awareness about the endangered species around world.
                    And there are millions of web applications facing lawsuits due to lack of usability features.
                    This project is an interactive educational web application that raises awareness about the enangered species and how you can help them.
                    For example, different species of endangered species, what are the threats, and, how you can support them.
                    In addition, the web application provides features that provides usability features for visually impared users like colourblind and weak vision users.
                </p>
            </section>


            <h2> <span>03. </span>Project Features</h2>

            <section  className='projectFeaturesSection'>
                <div className="featureFrame">

                    <image className="featureImage" style={{backgroundImage: `url(${FontSizeIncreaserImg})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Font size increaser</h3>
                        <p>Allows users with weak vision to increase the size of the texts inside the paragraphs.</p>
                    </div>

                    <line></line>
            
                </div>
            </section>
        </div>
    );
}

export default ProjectEcommerce;