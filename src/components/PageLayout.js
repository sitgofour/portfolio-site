import React from "react";
import PageHeader from './PageHeader';
import "../styles/PageLayout.css";
import Footer from "./Footer";


const PageLayout = (props) => {
    return(
        <div className="Page-layout">
            <PageHeader />
                {props.children}
            <Footer />
        </div>
    )
}

export default PageLayout;