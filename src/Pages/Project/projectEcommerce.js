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
import FigmaIcon from "../../Images/skillsIcons/figmaIcon.png";
import PhotopeaIcon from "../../Images/skillsIcons/photopeaIcon.png";

import GithubIcon from "../../Images/skillsIcons/githubIcon.png";
import PlayIcon from "../../Images/skillsIcons/playIcon.png";

import EcommerceFeaturFilter from "../../Images/projectsImage/EcommerceFeaturFilter.PNG";
import EcommerceFeaturBag from "../../Images/projectsImage/EcommerceFeaturBag.PNG";


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

                    <span>Figma
                        <image style={{backgroundImage: `url(${FigmaIcon})`}}></image>
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



            <section ref={aboutRef} className={`${'aboutSecton'} ${aboutIsVisible ? "showAnimateEndangeredSpecies" : ' '}`}>
                <h2> <span>02. </span>About this Project</h2>
                <p>
                   This is an Ecommerce website that focuses on selling shoes of brands such as nike, adids, puma etc. 
                   This is my first ecommerce website, created uing react.
                </p>
            </section>


            <section  className='projectDesignSection'>
                <h2> <span>03. </span>Project Designs/Layout</h2>
                <div className="projectDesignFrame">
                    <images className="projectDesignImages" ></images>
                    <images className="projectDesignImages" ></images>
                </div>
                    
                <div className="projectDesignFrame">
                    <images className="projectDesignImages" ></images>
                    <div className="projectDesignParagraph">
                        <Link exact to="https://miro.com/app/board/uXjVObVI6_k=/?share_link_id=259917343989" target="_blank" className="frame">
                            <button className="card">
                                <image style={{backgroundImage: `url(${PlayIcon})`}}></image>
                            </button>
                        </Link>
                        <line></line>
                        <p>This website was designed using Figma. Click the button above to view the design of this project.</p>
                    </div>
                   
                </div>
            </section>


            <section  className='projectFeaturesSection'>
                <h2> <span>04. </span>Project Features</h2>
                <div className="featureFrame">
                    <image className="featureImage" style={{backgroundImage: `url(${EcommerceFeaturFilter})`}}></image>
                    <div className="featureParagraphFrame">
                        <h3>Filter Options</h3>
                        <p>
                            Allows the users to select specific shoes based on one or multiple options. 
                            For example, select shoes based on their colour, brands, sport type...
                        </p>
                    </div>

                    <line></line>

                    <div className="featureParagraphFrame">
                        <h3>Add to bag</h3>
                        <p>
                            Allows the user to add multiple items to the shopping cart. 
                            Inside the cart, the users can add or remove the product quantity.
                        </p>
                    </div>
                    <image className="featureImage" style={{backgroundImage: `url(${EcommerceFeaturBag})`}}></image>

                </div>
            </section>
        </div>
    );
}

export default ProjectEcommerce;