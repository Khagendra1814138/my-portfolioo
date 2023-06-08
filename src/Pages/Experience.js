import React from "react";

import "../Styles/Experience.css"

import { ExperienceAnimations } from "../Animations/Shapes";


function Experience() {
    return (
        <div className="experience">

            <h1><span>02. </span>EXPERIENCES & JOURNEY</h1>

            <ExperienceAnimations/>
            <div className="timeline-Frame">
                <ul>
                    <li>
                        <div class="date">2000 - 2010</div>
                        <div class="title">My Childhood 👦⛰️</div>
                        <div class="descr">
                            I was born in Nepal, raised and studied till I was 10 years old.
                            Accesses to technogloies and devices like mobliephone and computers were rare during my childhood.
                            So technologies was always intriguing subject to me.
                            I moved to the UK with my family when I was 10 years old.
                        </div>
                    </li>
                    <li>
                        <div class="date">2010 - 2016</div>
                        <div class="title">Twickenham School 📚🎒</div>
                        <div class="descr">
                            I went to study at Twickenham School for my GCSE's.
                            Secondary education was very challanging for me because I could not speak English.
                            <br></br>
                            <br></br>
                            Although it was difficult to undersand during classes, 
                            Information and technologies (IT) always fascinated me and was my favourite subject.
                            I finished secondary school with 7 GCSE's inlcuding Maths, English and Science.
                        </div>
                    </li>
                    <li>
                        <div class="date">2016 - 2018</div>
                        <div class="title">Rinchomd upon Thames 🧑‍🏫</div>
                        <div class="descr">
                            I Continued to follow my intrest from secondary school and stuied BTECH LEVEL 3 Extended Diploma Information Technology
                            at Richmond upon Thames College.
                            This course was the first time I was Introduced to Web Development and immediately I loved it!
                            <br></br>
                            <br></br>
                            This is were my passion for Front-End development journey started.
                            I Completed my college stuides with overall grade of D*DD. 
                            Also, I was honoured with student of the year (2018) 🏆 award.
                        </div>
                    </li>
                    <li>
                        <div class="date">2019 - Present...</div>
                        <div class="title">McDonald's 👨‍🍳🍔</div>
                        <div class="descr">
                            After finishing college I took a gap year to start working and gain work experience.
                            I joined McDonald Resturant and worked there as a full timer from February to August.
                            <br></br>
                            <br></br>
                            I started as a kitchen crew member and customer support and now I am a crew trainer.
                            My responsibilities are mainly to take orders/serve customers, prepare/make foods and drinks, keeping the kitchen clean and tidy, 
                            check the foods & ingredients stocks, and teach/guide new staff members.
                            <br></br>
                            <br></br>
                            Through my hardwork and excellent performance, I was awarded with the employee of the months 🏆 award from May - July 2019.
                            After starting university, I continued working at McDonalds as parttime weekends.
                        </div>
                    </li>
                    <li>
                        <div class="date">2019 - 2022</div>
                        <div class="title">Brunel University 👨‍🎓🏫</div>
                        <div class="descr">
                            During my studies as a computer science, moduels such as Software engineering, Human Computer Interaction and Usability Engineering were my favourites.
                            I realized that UX/UI and Front-End were the path I wanted to follow.
                            <br></br>
                            <br></br>
                            While working on my projects, I graduelly developed my technical skills such as HTML, CSS, Javascript, React etc.
                            For my year 2 group and my final year project, I decided to develop web application, which helped me to further develop my skills.
                            <br></br>
                            <br></br>
                            University studies also helped me to develop my interpersonal skills such as teamwork, time management, leadership etc.
                            I graduated univeristy with First Class 🏆 Honours.
                        </div>
                    </li>
                    <li>
                        <div class="date">2023 - Present...</div>
                        <div class="title">Looking for Jobs 🔎🏢</div>
                        <div class="descr">
                            Since graduating, I been still working at McDonalds as parttime (3-4 days a week).
                            I Been also working on my personal portfolio projects to develop my skills.
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Experience;