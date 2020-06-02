import React, { Component } from 'react';
import '../styles/HomeLayout.css';

class HomeLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style : "page-wrapper-night",
            styleName: "night"
        }
        this.toggleStyle = this.toggleStyle.bind(this);
    }

    toggleStyle() {
        console.log("toggle style clicked");
        if(this.state.style === "page-wrapper-night") {
            this.setState({
                style: "page-wrapper-day",
                styleName: "day"
            });
        } else {
            this.setState({
                style: "page-wrapper-night",
                styleName: "night"
            });
        }
    }

    render() {
        return(
            <div className={this.state.style}>
                <div>
                    <button onClick={this.toggleStyle}>{this.state.styleName}</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default HomeLayout;