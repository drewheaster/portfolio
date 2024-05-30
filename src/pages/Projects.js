import React from "react";
import ProjectsPage from '../components/ProjectsPage/ProjectsPage';
import Header from '../components/Header/Header';


export default function Projects(props) {
    return (
        <>
            <div className="main-bg">
                <Header/>
                <ProjectsPage/>
            </div>
        </>
    )
}