import React, { Component } from 'react';
import '../styles/HomeLayout.css';
import { Helmet } from 'react-helmet';

class HomeLayout extends Component {
    render() {
        return(
            <div className={this.props.style}>
                <Helmet>
                    <title>Evan Of Earth</title>
                    <meta name="description" content="Evan Smith's software development portfolio website" />
                </Helmet>
                <div>
                    <button className={this.props.styleName} onClick={this.props.toggleStyle}>{this.props.buttonName}</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default HomeLayout;