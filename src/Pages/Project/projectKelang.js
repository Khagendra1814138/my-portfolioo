import React from "react";
import { Link } from "react-router-dom";

import "./projectKelang.css";

import { useInView } from 'react-intersection-observer';

import Back from "../../Images/dalmatian-spots.svg";

import EcommerceCover from "../../Images/projectsImage/Ecommerce.PNG";
import ReactIcon from "../../Images/skillsIcons/reactIcon.png"
import HtmlIcon from "../../Images/skillsIcons/htmlIcon.png";
import CssIcon from "../../Images/skillsIcons/cssIcon.png";
import JsIcon from "../../Images/skillsIcons/jsIcon.png";
import Figma from "../../Images/skillsIcons/figmaIcon.png";
import PhotopeaIcon from "../../Images/skillsIcons/photopeaIcon.png";

import GithubIcon from "../../Images/skillsIcons/githubIcon.png";
import PlayIcon from "../../Images/skillsIcons/playIcon.png";

import FontSizeIncreaserImg from "../../Images/projectsImage/fontSizeIncreaser.PNG";

function ProjectKelang (){

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
        <div className="KelangPage" style={{backgroundImage: `url(${Back})`}} > 
            <h1>Kelang an educaional web application.</h1>

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

                    <span>Figma
                        <image style={{backgroundImage: `url(${Figma})`}}></image>
                    </span>

                    <span>Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </span>
                </div>


                <div ref={linksRef} className={`${'projectLinks'} ${linksIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                    <Link exact to="https://github.com/Khagendra1814138/ke-lang" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${GithubIcon})`}}></image>
                        </div>
                    </Link>

                  
                    <Link exact to="https://ke-lang.netlify.app/" target="_blank" className="frame">
                        <div className="card">
                            <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                        </div>
                    </Link>
                </div>

            </div>

            <h2> <span>02. </span>About this Project</h2>


            <section ref={aboutRef} className={`${'aboutSecton'} ${aboutIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                <p>
                   This is an educational web application about a dance from an indigenous tribes of Eastern Nepal called the "Limbu" community.
                </p>
            </section>

            <h2> <span>03. </span>Project Designs/Layout</h2>
            <section  className='projectFeaturesSection'>
                <Link exact to="https://www.figma.com/file/veXIbF7HltJTiDdWPJAswo/Kelang-UI-layout-design?type=design&node-id=0%3A1&mode=design&t=u3jxkpTlzRFrq3zJ-1" target="_blank" className="frame">
                    <div className="card">
                        <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                    </div>
                </Link>
            </section>

            <h2> <span>04. </span>Project Features</h2>
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

export default ProjectKelang;