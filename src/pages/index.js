import React from "react"
import HomeLayout from '../components/HomeLayout';
import HomeMenu from "../components/HomeMenu";
import HomeTitle from "../components/HomeTitle";

const index = () => {
    return(
        <div>
            <HomeLayout>
                <HomeMenu />
                <HomeTitle />
            </HomeLayout>
        </div>
    )
}

export default index;