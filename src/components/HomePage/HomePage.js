import React, { useEffect } from "react";
import  { useLocation } from 'react-router-dom'
import "./style.css";
import ProfileImg from '../../assets/images/profile-image.png';

export default function HomePage(props) {

    const location = useLocation();

    useEffect(() => {
        // Store the previous location in sessionStorage
        sessionStorage.setItem('prevLocation', location.pathname);
    }, []);

    return (
        <>
            <div className="page-bg">
                <div className="home-main-container">
                    <div className="home-title-container">
                        <h1 className="home-title">Drew Easter</h1>
                        <p className="home-desc">
                            <span className="carrot">&lt;</span><span className="h2-tag">h2</span> <span className="class-tag">className</span>=<span className="class-prop">'my-title'</span><span className="carrot">&gt;</span><br/><p className='title'>Full-Stack Web Developer </p><span className="carrot">&lt;/</span><span className="h2-tag">h2</span><span className="carrot">&gt;</span>
                        </p>
                    </div>
                    <img className="home-profile-img" src={ProfileImg} alt="young man playing an orange guitar"></img>
                </div>
            </div>
        </>
    );
};