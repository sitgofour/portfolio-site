import React from "react";
import "../styles/HomeTitle.css";
import evan from "../images/name.png";
import subtitle from "../images/subtitle.svg";

const HomeTitle = () => {
    return(
        <div className="Home-title">
            <div className="Title">
                <h1>Evan Smith</h1>
            </div>
            <div className="Subtitle">
                <h3>Software Development</h3>
            </div>
        </div>
    )
}

export default HomeTitle;