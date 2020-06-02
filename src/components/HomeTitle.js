import React, { Component } from "react";
import "../styles/HomeTitle.css";

class HomeTitle extends Component {

    render(props) {

    let titleClass = this.props.titleStyle === "night" ? "Home-title-night" : "Home-title-day";

        return(
            <div className={titleClass}>
                <div className="Title">
                    <h1>Evan Smith</h1>
                </div>
                <div className="Subtitle">
                    <h3>Software Development</h3>
                </div>
            </div>
        )
    }
}

export default HomeTitle;