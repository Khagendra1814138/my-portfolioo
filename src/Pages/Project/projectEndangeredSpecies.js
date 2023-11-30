import React from "react";
import { Link } from "react-router-dom";

import "./projectEndangeredSpecies.css";

import { useInView } from 'react-intersection-observer';

import EndangeredSpeciesCover from "../../Images/projectsImage/endangeredSpecies.PNG";
import MernStackIcon from "../../Images/skillsIcons/mernStackIcon.png"
import HtmlIcon from "../../Images/skillsIcons/htmlIcon.png";
import CssIcon from "../../Images/skillsIcons/cssIcon.png";
import JsIcon from "../../Images/skillsIcons/jsIcon.png";
import MiroIcon from "../../Images/skillsIcons/miroIcon.png";
import PhotopeaIcon from "../../Images/skillsIcons/photopeaIcon.png";
import Postman from "../../Images/skillsIcons/postman.svg";

import GithubIcon from "../../Images/skillsIcons/githubIcon.png";
import PlayIcon from "../../Images/skillsIcons/playIcon.png";

import FontSizeIncreaserImg from "../../Images/projectsImage/fontSizeIncreaser.PNG";
import TextToVoicImg from "../../Images/projectsImage/textToVoice.PNG";
import ReadingGuideImg from "../../Images/projectsImage/readingGuide.PNG";
import ReadingMaskImg from "../../Images/projectsImage/readingMask.PNG";
import DrkLgtModeImg from "../../Images/projectsImage/darkmode.PNG";
import LargeCurserImg from "../../Images/projectsImage/largeCurser.PNG";
import QuizImg from "../../Images/projectsImage/quizFeature.PNG";

import endangeredSpeciesDesign1 from "../../Images/projectsImage/endangeredSpeciesDesign1.PNG";
import endangeredSpeciesDesign2 from "../../Images/projectsImage/endangeredSpeciesDesign2.PNG";
import endangeredSpeciesDesign3 from "../../Images/projectsImage/endangeredSpeciesDesign3.PNG";


function ProjectEndangeredSpecies (){

   
    // let classes = ["expander", "expanded"]
   
    
    // const handelClick = () =>{
    //     classes = ["expander", "expanded"].join(" ");

    //     return classes;
    // }

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
        <div className="endangeredSpecies"> 
            <h1>Endangered Species</h1>

            <image style={{backgroundImage: `url(${EndangeredSpeciesCover})`}} 
           
                ref={headerImgRef} className={`${'projectImage'} ${headerImgIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}
                >

            </image>
            
            <div className="skillsFrame"> 
                <h2> <span>01. </span>Tools Used</h2>

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

                    <span>MERN
                        <image style={{backgroundImage: `url(${MernStackIcon})`}}></image>
                    </span>

                    <span>Miro Board
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </span>

                    <span>Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </span>

                    <span>Postman
                        <image style={{backgroundImage: `url(${Postman})`}}></image>
                    </span>
                </div>


                <div ref={linksRef} className={`${'projectLinks'} ${linksIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
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



            <section ref={aboutRef} className={`${'aboutSecton'} ${aboutIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                <h2> <span>02. </span>About this Project</h2>
                <p>
                    This is my final year dissertion project.
                    During my research, I have found out that there were lack of awareness about the endangered species around world.
                    And there are millions of web applications facing lawsuits due to lack of usability features.
                    This project is an interactive educational web application that raises awareness about the enangered species and how you can help them.
                    For example, different species of endangered species, what are the threats, and, how you can support them.
                    In addition, the web application provides features that provides usability features for visually impared users like colourblind and weak vision users.
                </p>
            </section>



            <section  className='projectDesignSection'>
                <h2> <span>03. </span>Project Designs/Layout</h2>
                <div className="projectDesignFrame">
                    <images className="projectDesignImages" style={{backgroundImage: `url(${endangeredSpeciesDesign1})`}}></images>
                    <images className="projectDesignImages" style={{backgroundImage: `url(${endangeredSpeciesDesign2})`}}></images>
                </div>
                    
                <div className="projectDesignFrame">
                    <images className="projectDesignImages" style={{backgroundImage: `url(${endangeredSpeciesDesign3})`}}></images>
                    <div className="projectDesignParagraph">
                        <Link exact to="https://miro.com/app/board/uXjVObVI6_k=/?share_link_id=259917343989" target="_blank" className="frame">
                            <button className="card">
                                <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                            </button>
                        </Link>
                        <line></line>
                        <p>This website was designed using Miro Whiteboard. Click the button above to view the design of this project.</p>
                    </div>
                   
                </div>
            </section>

            <section  className='projectFeaturesSection'>
                <h2> <span>04. </span>Project Features</h2>
                <div className="featureFrame">

                    <image className="featureImage" style={{backgroundImage: `url(${FontSizeIncreaserImg})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Font size increaser</h3>
                        <p>Allows users with weak vision to increase the size of the texts inside the paragraphs.</p>
                    </div>

                    <line></line>

                    <div className="featureParagraphFrame">
                        <h3>Text to voice</h3>
                        <p>Allows users who finds reading difficult to convert the paragraphs texts into a voice.</p>
                    </div>
                    <image className="featureImage" style={{backgroundImage: `url(${TextToVoicImg})`}}></image>

                    <line></line>

                    <image className="featureImage" style={{backgroundImage: `url(${ReadingMaskImg})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Reading Mask</h3>
                        <p>Allows the users to specifically focus on certian part of the paragraph, making it easy to focus and read.</p>
                    </div>

                    <line></line>

                    <div className="featureParagraphFrame">
                        <h3>Reading Guide</h3>
                        <p>Allows the users to keep track and follow along the lines of text, just like your thumb following a line of text.</p>
                    </div>
                    <image className="featureImage" style={{backgroundImage: `url(${ReadingGuideImg})`}}></image>

                    <line></line>
                    
                    <image className="featureImage" style={{backgroundImage: `url(${DrkLgtModeImg})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Dark/light Mode</h3>
                        <p>Allows the users to change the color theme of the whole web application to dark/light.</p>
                    </div>

                    <line></line>
                    
                    <div className="featureParagraphFrame">
                        <h3>Large Curser</h3>
                        <p>Allows users with weak vision to change the normal mouse curser to large curser, making it easy to keep track of the curser.</p>
                    </div>
                    <image className="featureImage" style={{backgroundImage: `url(${LargeCurserImg})`}}></image>

                    <line></line>

                    <image className="featureImage" style={{backgroundImage: `url(${QuizImg})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Quiz</h3>
                        <p>Allows the users to take quiz and check their knowledge on endangered species, based on the informations provided by the web application.</p>
                    </div>
                
                </div>
            </section>
        </div>
    );
}

export default ProjectEndangeredSpecies;