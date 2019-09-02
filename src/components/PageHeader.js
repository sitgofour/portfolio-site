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
            <div>
                <ul>
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/">
                        <li>Projects</li>
                    </a>
                    <a href="/">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader;