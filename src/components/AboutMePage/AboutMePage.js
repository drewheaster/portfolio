import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./style.css";

export default function AboutMePage(props) {

    const location = useLocation();

    const setItemWithDelay = (key, value) => {
        setTimeout(() => {
          sessionStorage.setItem(key, value);
        }, 0);
    };

    useEffect(() => {
        // Store the previous location in sessionStorage
        const pageContainer = document.getElementById('about-page-container');
        const prevLocation = sessionStorage.getItem('prevLocation');

        if(prevLocation === '/') {
            pageContainer.setAttribute('style', `
                width: 95%;
                height: 90%;
                border-top-right-radius: 30rem; 
                border-bottom-right-radius: 30rem;
                animation: expand 1s .2s;
                animation-fill-mode: forwards;`
            );
            console.log('hey hey hey')
        } else {
            pageContainer.setAttribute('style', 'width: 100%; height: 100%');
        };

        setItemWithDelay('prevLocation', location.pathname);
    });

    return (
        <>
            <div className="page-bg">
                <div className="page-main-container" id="about-page-container">
                    <div class="about-me-info-container">
                        <div class="skills-bar">
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3-alt"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-node-js"></i>
                            <i class="fa-brands fa-react"></i>
                            <i class="fa-brands fa-python"></i>
                        </div>
                        <div class="about-me-desc">
                            <div>
                                <h2 class="desc-title">Where I've Been -</h2>
                                <p class="">I started learning about software development in May of 2023. I didn't have a technical background, so when I learned what was possible through code even at the basic level, I was hooked.</p>
                            </div>
                            <div>
                                <h2 class="desc-title">Where I Am -</h2>
                                <p class="">Since I began my journey with Python scripts, I've developed the desire to learn more about web development. Currently, I'm taking a course on full-stack development through SMU in Dallas, TX. I love working in React, creating webpages, and writing clean code!</p>
                            </div>
                            <div>
                                <h2 class="desc-title">Where I'm Going -</h2>
                                <p class="">I look forward to completing my classes and taking on a Front-End developer or a Full-Stack developer role full-time. I'm interested in the startup space, as well as creating clean code for anyone looking to hire!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};