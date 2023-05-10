import React from "react";
import '../Styles/Home.css';
import Profile from '../Images/Profile.png'
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
                <h1>About <span>Me</span></h1>

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
                ⚽
                    <div class="circleFrame">
                        <div class="circle"></div>
                    </div>

                    

                    <h1>Things I <span>enjoy</span> doing...</h1>
                    <div className="six-gride">
                        <div className="hobbies-frame">Riding Bike</div>
                        <div className="hobbies-frame">Playing Football</div>
                        <div className="hobbies-frame">Playing video games</div>
                        <div className="hobbies-frame">Learning front-end and UI/UX Design</div>
                        <div className="hobbies-frame">Calisthenics Workout</div>
                        <div className="hobbies-frame">Running</div>
                        <div className="hobbies-frame">Listening to Music</div>
                    </div>
                </section>
            </section>
            

            <section className="skills-Frame">
                <h1>My <span> Techincal Skills </span> Sets</h1>
                <div className="six-gride">
                    <div className="hobbies-frame">HTML</div>
                    <div className="hobbies-frame">CSS</div>
                    <div className="hobbies-frame">JavaScript</div>
                    <div className="hobbies-frame">React</div>

                    <div className="hobbies-frame">MongoDB</div>
                    <div className="hobbies-frame">Figma</div>
                    <div className="hobbies-frame">Git</div>
                    <div className="hobbies-frame">GitHub</div>

                    <div className="hobbies-frame">Trello Board</div>
                    <div className="hobbies-frame"></div>
                    <div className="hobbies-frame"></div>
                    <div className="hobbies-frame"></div>
                  
                </div>

                <h2>Get to <span>know</span> more about me :)</h2>

                <div className="personalities-Frame">
                    <div className="personalities-Row">
                        <div className="hobbies-frame">Teamwork</div>
                        <div className="hobbies-frame">Communication</div>
                    </div>

                    <div className="personalities-MiddleRow">
                        <div className="row">
                            <div className="hobbies-frame">Leadership</div>
                            <div className="hobbies-frame">Time Management</div>
                        </div>

                        <div className="row-middle">
                            <div className="about-image">
                                <image></image>
                                <span className="circle-spin"></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="hobbies-frame">Work Under Pressure</div>
                            <div className="hobbies-frame">Multitasking</div>
                        </div>
                    </div>

                    <div className="personalities-Row">
                        <div className="hobbies-frame">Problem Solving</div>
                        <div className="hobbies-frame">Keen to Learn</div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;