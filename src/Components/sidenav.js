import "../Styles/SideNav.css"
import React, {useState, useEffect} from 'react';


export const SideNav = () => {

    const [showSideNav, setShowSideNav] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', checkScreenPosition)
        return function cleanup() {
        window.removeEventListener('scroll', checkScreenPosition)
        }
    })

    const checkScreenPosition = () => {
        if (!showSideNav && window.pageYOffset > 400){
        setShowSideNav(true)
        } else if (showSideNav && window.pageYOffset <= 400){
        setShowSideNav(false)
        }
    };

    const about = () =>{
        window.scrollTo({top: 1100, behavior: 'smooth'});
    };
    const skills = () =>{
        window.scrollTo({top: 2600, behavior: 'smooth'});
    };
    const contact = () =>{
        window.scrollTo({top: 5000, behavior: 'smooth'});
    };

  return (
    <div className="side-nav" style={{display: showSideNav ? 'grid' : 'none'}}>
        <button className='sideNav-Btn' onClick={about} >  A
            <div className="sideBtn-label">About</div>
        </button>

        <button className='sideNav-Btn' onClick={skills}>  S
            <div className="sideBtn-label">Skills</div>
        </button>

        <button className='sideNav-Btn' onClick={contact}>  C
            <div className="sideBtn-label">Contact</div>
        </button>
    </div>
  );
};