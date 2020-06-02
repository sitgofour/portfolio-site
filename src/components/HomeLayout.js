import React, { Component } from 'react';
import '../styles/HomeLayout.css';

class HomeLayout extends Component {
    render() {
        return(
            <div className={this.props.style}>
                <div>
                    <button className={this.props.styleName} onClick={this.props.toggleStyle}>{this.props.buttonName}</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default HomeLayout;