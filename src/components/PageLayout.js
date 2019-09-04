import React from "react";
import PageHeader from './PageHeader';
import "../styles/PageLayout.css";


const PageLayout = (props) => {
    return(
        <div className="Page-layout">
            <PageHeader />
                {props.children}
        </div>
    )
}

export default PageLayout;