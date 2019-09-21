import React from "react";
import "../styles/Footer.css";
import gatsbyLogo from "../images/Gatsby_Logo_Black.svg";
import linkedIcon from "../images/footericons/linkedin.png";
import githubIcon from "../images/footericons/githubdark.png";
import twitterIcon from "../images/footericons/twittericon.png";

const Footer = () => {
    return(
        <div className="Footer">
            <div className="email-call">
                <p>lorem lorem lorem lorem lorem</p>
            </div>
            <div className="build-tag">
                <p>Lovingly Built with</p>
                <img src={gatsbyLogo} alt="gatsby-logo"></img>
            </div>
            <div className="footer-social">
                <div className="social-text">
                    <p>lorem lorem lorem lorem lorem</p>
                </div>
                <div className="footer-links">
                    <a href="/"><img src={linkedIcon} alt="linked in link"/></a>
                    <a href="/"><img src={githubIcon} alt="github link"/></a>
                    <a href="/"><img src={twitterIcon} alt="twitter link"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;