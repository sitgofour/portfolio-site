import React from "react";
import "../styles/Footer.css";
import linkedIcon from "../images/footericons/linkedin.png";
import githubIcon from "../images/footericons/githubdark.png";

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footer-links-text">
                you can also reach me here
            </div>
            <div className="footer-links-container">
                <a className="footer-link" href="https://www.linkedin.com/in/evan-smith-45600b97/" target="_blank" rel="noopener noreferrer"><img src={linkedIcon} alt="linked in link"/></a>
                <a className="footer-link" href="https://www.github.com/sitgofour" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github link"/></a>
            </div>
        </div>
    )
}

export default Footer;