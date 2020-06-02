import React, { Component } from "react"
import HomeLayout from '../components/HomeLayout';
import HomeMenu from "../components/HomeMenu";
import HomeTitle from "../components/HomeTitle";

class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style : "page-wrapper-night",
            styleName: "night",
            faceStyle: "nightFace",
            titleStyle: "night",
            buttonName: "Day Mode"
        }

        this.toggleStyle = this.toggleStyle.bind(this);
    }

    toggleStyle() {
        console.log("toggle style clicked");
        if(this.state.style === "page-wrapper-night") {
            this.setState({
                style: "page-wrapper-day",
                styleName: "day",
                portraitSrc: "day",
                titleStyle: "day",
                buttonName: "Night Mode"
            });
        } else {
            this.setState({
                style: "page-wrapper-night",
                styleName: "night",
                portraitSrc: "night",
                titleStyle: "night",
                buttonName: "Day Mode"
            });
        }
    }

    render() {
        return(
            <div>
                <HomeLayout 
                    toggleStyle={this.toggleStyle} 
                    style={this.state.style} 
                    styleName={this.state.styleName}
                    buttonName={this.state.buttonName}    
                >
                    <HomeMenu portraitSrc={this.state.portraitSrc}/>
                    <HomeTitle titleStyle={this.state.titleStyle}/>
                </HomeLayout>
            </div>
        )
    }
}

export default index;