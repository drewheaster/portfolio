import React from "react";
import HomePage from '../components/HomePage/HomePage';
import Header from '../components/Header/Header';


export default function Home(props) {
    return (
        <>
            <div className="main-bg">
                <Header/>
                <HomePage/>
            </div>
        </>
    )
}