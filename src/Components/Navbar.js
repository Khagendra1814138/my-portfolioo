import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import '../Styles/Navbar.css';

import ScrollIndicator from '../Components/ScrollIndicator';
import {FaUserGraduate} from 'react-icons/fa';

function Navbar () {
    const [expandNavbar, setExpandNavbar] = useState (false);
    const location = useLocation();

    useEffect (() =>{
        setExpandNavbar(false);
    }, [location]);

    return(
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="togglebutton">
                <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <div className="dash">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            <div className="linkContainer">
                <div className="links">
                    {/* <div className="myInitials"> <span>&#123;&nbsp;</span> KLimbu<span>&nbsp;&#125;</span></div> */}

                    <Link className="myInitials" to='/'> 
                        <FaUserGraduate size="2rem" color="#ffff"/>
                        <div class="glitch" data-text="&#123;&nbsp;KLimbu&nbsp;&#125;">
                            <span>&#123;&nbsp;</span>KLimbu<span>&nbsp;&#125;</span>
                        </div>
                    </Link>
                    
                    <Link className="navlist" to='/'>&lt;<span>01. </span>Home /&gt;</Link>
                    <Link className="navlist" to='experience'>&lt;<span>02. </span>Journey /&gt; </Link>
                    <Link className="navlist" to='projects'>&lt;<span>03. </span>Projects /&gt; </Link>
                </div>
            </div>
            <ScrollIndicator/>
        </div>
    );
}

export default Navbar;