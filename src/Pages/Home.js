// import React, { useRef } from "react";
import '../Styles/Home.css';
import '../Styles/Curves.css';
import '../Animations/Shapes.css';

import { useInView } from 'react-intersection-observer';

import Profile from '../Images/Profile.png';

import ReactIcon from "../Images/skillsIcons/reactIcon.png";
import HtmlIcon from "../Images/skillsIcons/htmlIcon.png";
import CssIcon from "../Images/skillsIcons/cssIcon.png";
import JsIcon from "../Images/skillsIcons/jsIcon.png";
import GitIcon from "../Images/skillsIcons/gitIcon.png";
import GithubIcon from "../Images/skillsIcons/githubIcon.png";
import TrelloIcon from "../Images/skillsIcons/trelloIcon.png";
import MiroIcon from "../Images/skillsIcons/miroIcon.png";
import FigmaIcon from "../Images/skillsIcons/figmaIcon.png";
import PhotopeaIcon from "../Images/skillsIcons/photopeaIcon.png";
import Postman from "../Images/skillsIcons/postman.svg";

import {ContactMe} from "../Components/Contact";
import {SideNav} from "../Components/sidenav";
// import BackgroundAnimation from "../Components/BackgroundCoolAnimation";

import { AvatarSectionAnimations } from "../Animations/Shapes";
import { AboutSectionAnimations } from "../Animations/Shapes";
import { SkillSectionAnimations } from "../Animations/Shapes";
import { ContactSectionAnimations } from "../Animations/Shapes";

import { Link } from "react-router-dom";

import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

function Home() {
    // const hireMe = useRef(null);

    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //       top: elementRef.current.offsetTop,  
    //       behavour: "smooth",
    //     })
    // }

    const { ref: aboutRef, inView: aboutSectionIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: hobbiesRef, inView: hobbiesSectionIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: skillsRef, inView: skillsSectionIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: interpersonalRef, inView: interpersonalSectionIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: contactRef, inView: contactIsVisible} = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    return(
        <div className="home">
            <SideNav/>

            {/* <button className="contactMeBtn" onClick={() => scrollToSection(hireMe)}>Hire Me</button> */}

            <section className="avatar-Section">
                <div className="ring">
                    <div className="avatarFrame">
                        <image className="profile" style={{backgroundImage: `url(${Profile})`}}> </image>
                    </div>
                </div>
                
                <section className="bioFrame">
                    <h2> <span>🙏</span> Namaste, It's me</h2>
                    <h1>Khagendra Limbu</h1>
                    <h2>And I'm a <span>Front-End Developer</span> and <span>UI/UX Designer</span></h2>
                    <div className='soicalConncectionFrame'>
                        <Link className="socialMedia" exact to="https://www.instagram.com/khagendra.limbu.790/" target="blank"><AiFillInstagram size="4rem" color="#008080"/></Link>
                        <Link className="socialMedia" exact to="https://www.linkedin.com/in/khagendra-limbu-213520242/" target="blank"><AiFillLinkedin size="4rem" color="#008080"/></Link>
                        <Link className="socialMedia" exact to="https://github.com/Khagendra1814138" target="blank"><AiFillGithub size="3.9rem" color="#008080"/></Link>
                    </div>

                    <div className="curve-AvatarSection"></div>
                </section>

                <AvatarSectionAnimations/>
            </section>
           
            
             
            <section className="about-Section">
                <h1><span>01. </span>ABOUT ME</h1>

                <section ref={aboutRef} className={`${'introduction-Frame'} ${aboutSectionIsVisible ? "moveUp" : "introduction-Frame"}`}>
                    
                    {/* <div class="box">
                        <div class="spin-container">
                            <div class="shape">
                                <div class="image"></div>
                            </div>
                        </div>
                    </div> */}

                    <div className='aboutImage'>
                        <div>
                        .<d>about</d>:hover&#123;
                            <br></br>
                            &nbsp; <span>Name: </span> Khagendra Limbu;
                            <br></br>
                            &nbsp; <span>Age: </span>23;
                            <br></br>
                            &nbsp; <span>University: </span> Brunel, London;
                            <br></br>
                            &nbsp; <span>Location: </span> London, Feltham;
                            <br></br>
                            &nbsp; <span>Country: </span> Nepal/Uk;
                            <br></br>
                            &nbsp; <span>Language: </span> English, Nepali, Hindi;
                            <br></br>
                            &#125;
                        </div>
                        <image style={{backgroundImage: `url(${Profile})`}}></image>
                    </div>

                    <p>
                        Recent graduate with 1st class honour in computer sicence at Brunel Univerisity London. 
                        I am a starter/junior front-end developer and UI/UX Designer. 
                        During my college studies, I was introduced to web Development, which immediately sparked my interest in Front-End development.
                        While studying computer science at university, I realized that Front-End and UI/UX design was the path I wanted to pursue.
                        <br></br>
                        <br></br>
                        <br></br>
                        My goals are to develop applications that prioritize 
                        <span> functionality, easy to use </span> and provide <span> engaging user experience</span> and <span> beautiful user interfaces</span>.
                        Currently, I have been working on my individual Front-End projects, and I have been exploring different tools and technologies to learn the basics of Front-End development.
                        My journey is just starting, and I have a long road ahead. 
                        My skills are far from the best, but, I am willing to learn to further develop my skills.
                    </p>
                </section>
                
                <h2><span>01.1 </span>My Hobbies</h2>

                <section ref={hobbiesRef} className={`${'hobbies-Frame'} ${hobbiesSectionIsVisible ? "moveUp" : ' '}`}>      
                    <div className="hobbies">Riding Bike <span>🚴</span></div>
                    <div className="hobbies">Playing Football <span>⚽</span></div>
                    <div className="hobbies">Playing video games <span>🎮</span></div>
                    <div className="hobbies">Front-End & UI/UX Design <span>🖥️</span></div>
                    <div className="hobbies">Calisthenics Workout <span>💪</span></div>
                    <div className="hobbies">Running <span>🏃</span></div>
                </section>

                {/* <BackgroundAnimation/> */}
                <AboutSectionAnimations/>
                <div className="curve-SkillSection"></div>
            </section>
            

            <section className="skills-Section">
                <h1><span>02. </span>SKILLS</h1>

                <div ref={skillsRef} className={`${'six-gride'} ${skillsSectionIsVisible ? "moveUp" : ' '}`}>
                    <div className="hobbies">HTML
                        <image style={{backgroundImage: `url(${HtmlIcon})`}}></image>
                    </div>

                    <div className="hobbies">CSS
                        <image style={{backgroundImage: `url(${CssIcon})`}}></image>
                    </div>

                    <div className="hobbies">JavaScript
                        <image style={{backgroundImage: `url(${JsIcon})`}}></image>
                    </div>

                    <div className="hobbies">React
                        <image style={{backgroundImage: `url(${ReactIcon})`}}></image>
                    </div>

                    <div className="hobbies">Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </div>
                        
                    <div className="hobbies">Figma
                        <image style={{backgroundImage: `url(${FigmaIcon})`}}></image>
                    </div>

                    <div className="hobbies">Git
                        <image style={{backgroundImage: `url(${GitIcon})`}}></image>
                    </div>

                    <div className="hobbies">GitHub
                        <image style={{backgroundImage: `url(${GithubIcon})`}}></image>
                    </div>

                    <div className="hobbies">Trello Board
                        <image style={{backgroundImage: `url(${TrelloIcon})`}}></image>
                    </div>

                    <div className="hobbies">Miro Board
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </div>

                    <div className="hobbies">Postman Pat
                        <image style={{backgroundImage: `url(${Postman})`}}></image>
                    </div>
                </div>

                <h2>Get to <span>know</span> more about me 👋</h2>

                <div ref={interpersonalRef} className={`${'personalities-Frame'} ${interpersonalSectionIsVisible ? "moveUp" : ' '}`}>
                    <div className="personalities-Row">
                        <div className="hobbies">Teamwork <span>🤝</span></div>
                        <div className="hobbies">Communication <span>🗣️</span></div>
                    </div>

                    <div className="personalities-MiddleRow">
                        <div className="row">
                            <div className="hobbies">Leadership <span>👨‍🏫</span></div>
                            <div className="hobbies">Time Management <span>⏳</span></div>
                        </div>

                        <div className="row-middle">
                            {/* <div className="about-image">
                                <image style={{backgroundImage: `url(${Profile})`}}></image>
                                <div className="circle-spin"></div>
                            </div> */}

                            <div class="box">
                                <div class="spin-container">
                                    <div class="shape">
                                    <div class="image" style={{backgroundImage: `url(${Profile})`}}></div>
                                </div>
                            </div>
                    </div>
                        </div>

                        <div className="row">
                            <div className="hobbies">Work Under Pressure <span>😄</span></div>
                            <div className="hobbies">Multitasking <span>🤹</span></div>
                        </div>
                    </div>

                    <div className="personalities-Row">
                        <div className="hobbies">Problem Solving <span>🧩</span></div>
                        <div className="hobbies">Keen to Learn <span>✍️</span></div>
                    </div>
                    
                    <div className="personalities-Row">
                        <div className="hobbies">Quick Learner <span>🚀</span></div>
                    </div>
                </div>

                <SkillSectionAnimations/>
                <div className="curve-ContactSection"></div>  
            </section>
                

            <section ref={contactRef} className="contact-Section">
                <h1 ><span>03.</span> CONTACT</h1>
                {/* ref={hireMe} */}
                <div className={`${'contactFrame'} ${contactIsVisible ? "moveUp" : ' '}`}>
                    <iframe className="map-Frame" title="felthamMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39787.35592632645!2d-0.4541092758145006!3d51.445124181006776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767371edfe0ebb%3A0x94d7e225880115cc!2sFeltham%2C%20UK!5e0!3m2!1sen!2sus!4v1684670165731!5m2!1sen!2sus" 
                        width="572" height="450"
                        allowfullscreen="none" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>				   
                    <div>
                        <ContactMe/> 
                    </div>
                    
                </div>

                <ContactSectionAnimations/>
            </section>
            
        </div>
    );
}

export default Home;