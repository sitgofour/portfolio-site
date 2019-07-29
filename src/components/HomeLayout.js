import React from 'react';
import '../styles/HomeLayout.css';

const HomeLayout = (props) => {
    console.log(props)
    return(
        <div className="page-wrapper">
            {props.children}
        </div>
    )
}


export default HomeLayout;