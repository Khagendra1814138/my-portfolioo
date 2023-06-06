import React from "react";
import '../Styles/Footer.css';
import { Link } from "react-router-dom";

import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

function Footer() {
    return(
        <div className="footer">
            <div className="socialMediaFrame">
                <Link className="instagram" exact to="https://www.instagram.com/" target="blank"><AiFillInstagram size="auto" color="#008080"/></Link>
                <Link className="linkedIn" exact to="https://www.linkedin.com/in/khagendra-limbu-213520242/" target="blank"><AiFillLinkedin size="auto" color="#008080"/></Link>
                <Link className="gitHub" exact to="https://github.com/Khagendra1814138" target="blank"><AiFillGithub size="auto" color="#008080"/></Link>
            </div>
            <p> Copyright &copy; 2023 Khagendra Limbu</p>

        </div>
    );
}

export default Footer;