import React from "react";

import "../Styles/Experience.css"


function Experience() {
    return (
        <div className="experience">

            <h1><span>Experiences</span> & <span>Journey</span></h1>

            <div className="timeline-Frame">

                <ul>
                    <li>
                        <div class="date">2000 - 2010</div>
                        <div class="title">My Childhood 👦⛰️</div>
                        <div class="descr">
                            I was born in Nepal, raised and studied till I was 10 years old, then I moved to the UK in 2010.
                        </div>
                    </li>
                    <li>
                        <div class="date">2010 - 2016</div>
                        <div class="title">Twickenham School 📚🎒</div>
                        <div class="descr">
                            Studied at Twickenham School.
                        </div>
                    </li>
                    <li>
                        <div class="date">2016 - 2018</div>
                        <div class="title">Rinchomd upon Thames 🧑‍🏫</div>
                        <div class="descr">Lorem ipsum dolor</div>
                    </li>
                    <li>
                        <div class="date">2019 - Present...</div>
                        <div class="title">McDonald's 🧑‍💼</div>
                        <div class="descr">Lorem ipsum dolor</div>
                    </li>
                    <li>
                        <div class="date">2019 - 2022</div>
                        <div class="title">Brunel University 👨‍🎓🏫</div>
                        <div class="descr">Lorem ipsum dolor</div>
                    </li>
                    <li>
                        <div class="date">2023 - Present...</div>
                        <div class="title">Looking for Jobs 🔎🏢</div>
                        <div class="descr">Lorem ipsum dolor</div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Experience;