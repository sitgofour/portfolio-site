import React from 'react';
import headerLogo from "../images/header-logo.png";
import "../styles/PageHeader.css";
import { Link } from 'gatsby';

const PageHeader = () => {
    return(
        <div className="Page-header">
            <div className="header-logo">
                <Link to="/">
                    <img src={headerLogo} alt="home logo and button"/>
                </Link>
            </div>
            <div className="header-page-links">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="header-link">
                                <p>Home</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <div className="header-link">
                                <p>Projects</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <div className="header-link">
                                <p>Contact</p> 
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader;