import React from "react";
import "../styles/Footer.css";
import gatsbyLogo from "../images/Gatsby_Logo_Black.svg";

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
            <div className="social">
                <p>lorem lorem lorem lorem lorem</p>
            </div>
        </div>
    )
}

export default Footer;