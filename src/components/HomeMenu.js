import React from "react";
import "../styles/HomeMenu.css";
import github from "../images/github.svg";
import linked from "../images/linkedin.svg";
import contact from "../images/contact.svg";
import projects from "../images/projects.svg";

const HomeMenu = () => {
    return(
        <div className="Home-menu">
            <div className="github-link">
                <a href="google.com">
                    <img src={github} alt="github-link"/>
                </a>
            </div>
            <div className="linkedin-link">
                <a href="#">
                    <img src={linked} alt="linked-in-link"/>
                </a>
            </div>
            <div className="contact-link">
                <a href="#">
                    <img src={contact} alt="contact-page-link"/>
                </a>
            </div>
            <div className="projects-link">
                <a href="#">
                    <img src={projects} alt="link-to-projects"/>
                </a>
            </div>            
        </div>
        
    )
}

export default HomeMenu;