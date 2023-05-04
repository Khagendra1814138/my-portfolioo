import React from "react";
import '../Styles/Home.css';
import Profile from '../Images/Profile.png'

function Home() {
    return(
        <div className="home">
            <div className="ring">
                <div className="avatarFrame">
                    <image className="profile" style={{backgroundImage: `url(${Profile})`}}> </image>
                </div>
            </div>
            <section className="bioFrame">
                <div className="curveTwo"></div>
                <h2>Namaste, It's me</h2>
                <h1>Khagendra Limbu</h1>
                <h2>And I'm a <span>Front-End Developer</span></h2>
            </section>
                
            <section className="about-frame">
                <div className="curve"></div>
                <h1>About <span>Me</span></h1>

                <div className="grid">
                    <div className="about-image">
                        <image></image>
                        <span className="circle-spin"></span>
                    </div>
                    <p>A beginner/junior Front-End developer with a passion for learning and creating UI/UX</p>
                </div>
            </section>
            
            <section className="hobbies-Frame">
                <h1>Things I <span>enjoy</span> doing...</h1>
                <div className="six-gride">
                    <div className="hobbies-frame">Riding Bike</div>
                    <div className="hobbies-frame">Playing Football</div>
                    <div className="hobbies-frame">Playing video games</div>
                    <div className="hobbies-frame">Learning front-end</div>
                  
                </div>
            </section>


            <section className="hobbies-Frame">
                <h1>My <span>Skills</span> Sets</h1>
                <div className="six-gride">
                    <div className="hobbies-frame">Riding Bike</div>
                    <div className="hobbies-frame">Playing Football</div>
                    <div className="hobbies-frame">Playing video games</div>
                    <div className="hobbies-frame">Learning front-end</div>
                  
                </div>
            </section>
        </div>
    );
}

export default Home;