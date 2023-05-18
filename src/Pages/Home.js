import React from "react";
import '../Styles/Home.css';
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


import BackgroundAnimation from "../Components/BackgroundCoolAnimation";

function Home() {
    return(
        <div className="home">
            <div className='diamond-narrow'></div>
            <div className='diamond-shield'></div>
            <div className='space-invader'></div>
            <div className='moon'></div>

            <section className="avatarSection">
                <div className="ring">
                    <div className="avatarFrame">
                        <image className="profile" style={{backgroundImage: `url(${Profile})`}}> </image>
                    </div>
                </div>
                
                <section className="bioFrame">
                    <div className="curveTwo"></div>
                    <h2> <span>🙏</span> Namaste, It's me</h2>
                    <h1>Khagendra Limbu</h1>
                    <h2>And I'm a <span>Front-End Developer</span> and <span>UI/UX Designer</span></h2>
                </section>
            </section>
           

             
            <section className="about-frame">
                <BackgroundAnimation/>

                <div className="curve"></div>
                
                <h1>About <span>Me</span>🧑</h1>

                <div className="grid">
                    <div class="box">
                        <div class="spin-container">
                            <div class="shape">
                                <div class="bd"> </div>
                            </div>
                        </div>
                    </div>

                    <p>A beginner/junior Front-End developer with a passion for learning and creating UI/UX</p>
                </div>

                <section className="hobbies-Frame">
                    
                    <div class="circleFrame">
                        <div class="circle"></div>
                    </div>
                    
                    <h2>Things I <span>enjoy</span> doing...</h2>
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
            </section>
            

            <section className="skills-Frame">
                <h1>My <span> Techincal Skills </span> Sets ⚒️</h1>
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

                    <div className="hobbies-frame">Miro Whiteboard
                        <image style={{backgroundImage: `url(${MiroIcon})`}}></image>
                    </div>

                  
                </div>

                <h2>Get to <span>know</span> more about me 👋</h2>

                <div className="personalities-Frame">
                    <div className="personalities-Row">
                        <div className="hobbies-frame">Teamwork <span>🤝</span></div>
                        <div className="hobbies-frame">Communication <span>🗣️👂</span></div>
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
                </div>

            </section>
        </div>
    );
}

export default Home;