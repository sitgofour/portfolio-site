import React, { Component } from "react";
import { Link } from 'gatsby';
import "../styles/HomeMenu.css";
import github from "../images/github.svg";
import linked from "../images/linkedin.svg";
import contact from "../images/contact.png";
import projects from "../images/projects.png";
import portraitNight from "../images/portrait.svg";
import portraitDay from "../images/portrait-day.svg";

class HomeMenu extends Component {
    render(props) {

        let portrait = (this.props.portraitSrc) === "day" ? portraitDay : portraitNight;

        return(
            <div className="Home-menu">
                <div className="portrait-image">
                    <img src={portrait} alt="artistic portrait"/>
                </div>
                <div className="github-link menu-item">
                    <a href="https://github.com/sitgofour" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github-link"/>
                    </a>
                </div>
                <div className="linkedin-link menu-item">
                    <a href="https://www.linkedin.com/in/evan-smith-45600b97/" target="_blank" rel="noopener noreferrer">
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
}

export default HomeMenu;

