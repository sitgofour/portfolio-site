import React from "react";
import "../styles/Footer.css";
import linkedIcon from "../images/footericons/linkedin.png";
import githubIcon from "../images/footericons/githubdark.png";
import twitterIcon from "../images/footericons/twittericon.png";

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footer-links-text">
                you can also reach me here
            </div>
            <div className="footer-links-container">
                <a className="footer-link" href="/"><img src={linkedIcon} alt="linked in link"/></a>
                <a className="footer-link" href="/"><img src={githubIcon} alt="github link"/></a>
                <a className="footer-link" href="/"><img src={twitterIcon} alt="twitter link"/></a>
            </div>
        </div>
    )
}

export default Footer;