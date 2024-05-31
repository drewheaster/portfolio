import React, { useEffect, useState } from "react";
import "./style.css";
import ProfileImg from '../../assets/images/IMG_3842.jpg';

export default function HomePage(props) {
    return (
        <>
            <div className="page-bg">
                <div className="home-main-container">
                    <div className="home-title-container">
                        <h1 className="home-title">Drew Easter</h1>
                        <p className="home-desc"><span className="carrot">&lt;</span><span className="p-tag">p</span> <span className="class-tag">className</span>=<span className="class-prop">'my-title'</span><span className="carrot">&gt;</span> <span id='title'>Front-End Web Developer</span> <span className="carrot">&lt;/</span><span className="p-tag">p</span><span className="carrot">&gt;</span></p>
                    </div>
                    <img className="home-profile-img" src={ProfileImg} alt="young man playing an orange guitar"></img>
                </div>
            </div>
        </>
    );
};