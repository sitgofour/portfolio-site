import React from "react";
import "../styles/HomeTitle.css";
import evan from "../images/name.png";
import subtitle from "../images/subtitle.svg";

const HomeTitle = () => {
    return(
        <div className="Home-title">
            <div className="Title">
                <img src={evan} alt="evan smith"/>
            </div>
            <div className="Subtitle">
                <img src={subtitle} alt="web developer"/>
            </div>
        </div>
    )
}

export default HomeTitle;