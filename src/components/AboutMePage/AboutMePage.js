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
    }, []);

    return (
        <>
            <div className="page-bg">
                <div className="page-main-container" id="about-page-container">

                </div>
            </div>
        </>
    );
};