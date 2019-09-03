import React from 'react';
import headerLogo from "../images/header-logo.png";
import "../styles/PageHeader.css";

const PageHeader = () => {
    return(
        <div className="Page-header">
            <div className="header-logo">
                <a href="/">
                    <img src={headerLogo} alt="home logo and button"/>
                </a>
            </div>
            <div className="header-page-links">
                <ul>
                    <div className="header-link">
                        <a href="/">
                            <li>Home</li>
                        </a> 
                    </div>
                    <div className="header-link">
                        <a href="/projects">
                            <li>Projects</li>
                        </a>
                    </div>
                    <a href="/contact">
                        <div className="header-link">
                            <li>Contact</li> 
                        </div>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader;