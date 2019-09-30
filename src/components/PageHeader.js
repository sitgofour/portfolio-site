import React from 'react';
import headerLogo from "../images/header-logo.png";
import "../styles/PageHeader.css";
import { Link } from 'gatsby';

const PageHeader = () => {
    return(
        <div className="Page-header">
                <div className="header-logo">
                    <Link to="/">
                        <img src={headerLogo} alt="page logo"/>
                    </Link>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li>
                            <Link className="header-nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="header-nav-link" to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="header-nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default PageHeader;