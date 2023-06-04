import React from "react";
import '../Styles/Home.css';
import '../Styles/Curves.css';

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

import {ContactMe} from "../Components/Contact";
import {SideNav} from "../Components/sidenav";
// import BackgroundAnimation from "../Components/BackgroundCoolAnimation";

import { AvatarSectionAnimations } from "../Animations/Shapes";
import { AboutSectionAnimations } from "../Animations/Shapes";
import { SkillSectionAnimations } from "../Animations/Shapes";
import { ContactSectionAnimations } from "../Animations/Shapes";

function Home() {
    return(
        <div className="home">
            <SideNav/>

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

                    <div className="curve-AvatarSection"></div>
                    
                </section>

                <AvatarSectionAnimations/>
            </section>
           

             
            <section className="about-Section">
                <h1><span>01. </span>ABOUT ME</h1>

                <section className="introduction-Frame">
                    
                    <div class="box">
                        <div class="spin-container">
                            <div class="shape">
                                <div class="image"></div>
                            </div>
                        </div>
                    </div>

                    <p>
                        I am a recent graduate and a starter/junior front-end developer. 
                        During my college studies, I was introduced to web Development, which immediately sparked my interest in Front-End development.
                        While studying computer science at university, I realized that Front-End and UI/UX design was the path I wanted to pursue.
                        <br></br>
                        <br></br>
                        <br></br>
                        My goals are to develop applications that prioritize 
                        <span> functionality</span> and provide <span> engaging user experience</span> and <span> beautiful user interfaces</span>.
                        Currently, I have been working on my individual Front-End projects, and I have been exploring different tools and technologies to learn the basics of Front-End development.
                        My journey is just starting, and I have a long road ahead. 
                        My skills are far from the best, but, I am willing to learn to further develop my skills.
                    </p>
                </section>


                <section className="hobbies-Frame">
                    <h2><span>01.1 </span>My Hobbies</h2>

                    <div className="six-gride">
                        <div className="hobbies-frame">Riding Bike <span>🚴</span></div>
                        <div className="hobbies-frame">Playing Football <span>⚽</span></div>
                        <div className="hobbies-frame">Playing video games <span>🎮</span></div>
                        <div className="hobbies-frame">Front-End & UI/UX Design <span>🖥️</span></div>
                        <div className="hobbies-frame">Calisthenics Workout <span>💪</span></div>
                        <div className="hobbies-frame">Running <span>🏃</span></div>
                        <div className="hobbies-frame">Listening to Music <span>🎧</span></div>
                    </div>
                </section>

                {/* <BackgroundAnimation/> */}
                <AboutSectionAnimations/>
                <div className="curve-SkillSection"></div>
            </section>
            

            <section className="skills-Section">
                <h1><span>02. </span>SKILLS</h1>

                <div className="six-gride">
                    <div className="hobbies-frame">HTML
                        <image style={{backgroundImage: `url(${HtmlIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">CSS
                        <image style={{backgroundImage: `url(${CssIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">JavaScript
                        <image style={{backgroundImage: `url(${JsIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">React
                        <image style={{backgroundImage: `url(${ReactIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">Photopea
                        <image style={{backgroundImage: `url(${PhotopeaIcon})`}}></image>
                    </div>
                        
                    <div className="hobbies-frame">Figma
                        <image style={{backgroundImage: `url(${FigmaIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">Git
                        <image style={{backgroundImage: `url(${GitIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">GitHub
                        <image style={{backgroundImage: `url(${GithubIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">Trello Board
                        <image style={{backgroundImage: `url(${TrelloIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">Miro Board
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </div>

                    <div className="hobbies-frame">Postman Pat
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </div>

                </div>

                <h2>Get to <span>know</span> more about me 👋</h2>

                <div className="personalities-Frame">

                    <div className="personalities-Row">
                        <div className="hobbies-frame">Teamwork <span>🤝</span></div>
                        <div className="hobbies-frame">Communication <span>🗣️</span></div>
                    </div>

                    <div className="personalities-MiddleRow">
                        <div className="row">
                            <div className="hobbies-frame">Leadership <span>👨‍🏫</span></div>
                            <div className="hobbies-frame">Time Management <span>⏳</span></div>
                        </div>

                        <div className="row-middle">
                            <div className="about-image">
                                <image style={{backgroundImage: `url(${Profile})`}}></image>
                                <div className="circle-spin"></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="hobbies-frame">Work Under Pressure <span>😄</span></div>
                            <div className="hobbies-frame">Multitasking <span>🤹</span></div>
                        </div>
                    </div>

                    <div className="personalities-Row">
                        <div className="hobbies-frame">Problem Solving <span>🧩</span></div>
                        <div className="hobbies-frame">Keen to Learn <span>✍️</span></div>
                    </div>
                    
                    <div className="personalities-Row">
                        <div className="hobbies-frame">Quick Learner <span>🚀</span></div>
                    </div>

                </div>

                <SkillSectionAnimations/>
                <div className="curve-ContactSection"></div>  
            </section>
                

            <section className="contact-Section">
                <h1><span>03.</span> CONTACT</h1>

                <iframe className="map-Frame" title="felthamMap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39787.35592632645!2d-0.4541092758145006!3d51.445124181006776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767371edfe0ebb%3A0x94d7e225880115cc!2sFeltham%2C%20UK!5e0!3m2!1sen!2sus!4v1684670165731!5m2!1sen!2sus" 
                    width="600" height="450"
                    allowfullscreen="none" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>				   
            
                <div>
                    <ContactMe/> 
                </div>

                <ContactSectionAnimations/>
            </section>
            
        </div>
    );
}

export default Home;