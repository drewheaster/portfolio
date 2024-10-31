import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./style.css";

export default function ProjectsPage(props) {

    const location = useLocation();

    const setItemWithDelay = (key, value) => {
        setTimeout(() => {
          sessionStorage.setItem(key, value);
          console.log(`${key} set to ${value} in sessionStorage`);
        }, 0);
    };

    useEffect(() => {
        // Store the previous location in sessionStorage
        const pageContainer = document.getElementById('projects-page-container');
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
        } else {
            pageContainer.setAttribute('style', 'width: 100%; height: 100%');
        }

        setItemWithDelay('prevLocation', location.pathname)
    });

    return (
        <>
            <div className="page-bg">
                <div className="page-main-container" id="projects-page-container">
                    <div className="projects-container">
                        <div className="project-line">
                            <div className="project-tile">

                            </div>
                            <div className="project-tile">

                            </div>
                        </div>
                        <div className="project-line">
                            <div className="project-tile">

                            </div>
                            <div className="project-tile">

                            </div>
                        </div>
                        <div className="project-line">
                            <div className="project-tile">

                            </div>
                            <div className="project-tile">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};