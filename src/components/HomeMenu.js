import React from "react";
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
                <a href="github.com">
                    <img src={github} alt="github-link"/>
                </a>
            </div>
            <div className="linkedin-link menu-item">
                <a href="linkedin.com">
                    <img src={linked} alt="linked-in-link"/>
                </a>
            </div>
            <div className="contact-link menu-item">
                <a href="/contact">
                    <img src={contact} alt="contact-page-link"/>
                </a>
            </div>
            <div className="projects-link menu-item">
                <a href="/projects">
                    <img src={projects} alt="link-to-projects"/>
                </a>
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