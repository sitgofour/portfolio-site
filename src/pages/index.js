import React from "react"
import HomeLayout from '../components/HomeLayout';
import HomeMenu from "../components/HomeMenu";

const index = () => {
    return(
        <div>
            <HomeLayout>
                <HomeMenu />
            </HomeLayout>
        </div>
    )
}

export default index;