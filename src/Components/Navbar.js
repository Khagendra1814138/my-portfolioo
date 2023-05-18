import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import '../Styles/Navbar.css';

import ScrollIndicator from '../Components/ScrollIndicator';

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

            <div className="links">
                <Link className="active" to='/'> Home </Link>
                <Link className="active" to='experience'> Experience/Journey </Link>
                <Link className="active" to='projects'> Projects </Link>
            </div>

            <ScrollIndicator/>
        </div>
    );
}

export default Navbar;