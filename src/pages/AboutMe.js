import React from "react";
import AboutMePage from '../components/AboutMePage/AboutMePage.js';
import Header from '../components/Header/Header';


export default function AboutMe(props) {
    return (
        <>
            <div className="main-bg">
                <Header/>
                <AboutMePage/>
            </div>
        </>
    )
}