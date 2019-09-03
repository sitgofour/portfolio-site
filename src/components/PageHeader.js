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
                    <li>
                        <a href="/">
                            <div className="header-link">
                                <p>Home</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <div className="header-link">
                                <p>Projects</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            <div className="header-link">
                                <p>Contact</p> 
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader;