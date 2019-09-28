import React from "react";
import { Link } from 'gatsby';
import "../styles/HomeMenu.css";
import github from "../images/github.svg";
import linked from "../images/linkedin.svg";
import contact from "../images/contact.svg";
import projects from "../images/projects.svg";
import portrait from "../images/portrait.svg";

const HomeMenu = () => {
    return(
        <div className="Home-menu">
            <div className="portrait-image">
                <img src={portrait} alt="artistic portrait"/>
            </div>
            <div className="github-link menu-item">
                <a href="github.com" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github-link"/>
                </a>
            </div>
            <div className="linkedin-link menu-item">
                <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linked} alt="linked-in-link"/>
                </a>
            </div>
            <div className="contact-link menu-item">
                <Link to="/contact">
                    <img src={contact} alt="contact-page-link"/>
                </Link>
            </div>
            <div className="projects-link menu-item">
                <Link to="/projects">
                    <img src={projects} alt="link-to-projects"/>
                </Link>
            </div>
            <div className="select-option-text">
                <div className="shimmer">
                    <h4>Select Option From Menu</h4>
                </div>
            </div>            
        </div>
        
    )
}

export default HomeMenu;

