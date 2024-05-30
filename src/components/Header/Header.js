import React, { useEffect, useState } from "react";
import './style.css'

export default function Header(props) {

    let [ HomeUnderlined, setHomeUnderlined ] = useState(false)
    let [ AboutMeUnderlined, setAboutMeUnderlined ] = useState(false)
    let [ ProjectsUnderlined, setProjectsUnderlined ] = useState(false)
    let [ ContactUnderlined, setContactUnderlined ] = useState(false)

    let pageUrl = window.location.href

    useEffect (() => {
        if ( pageUrl === window.location.origin + '/' ) {
            setHomeUnderlined(true)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(false)
            setContactUnderlined(false)
        } else if ( pageUrl === window.location.origin + '/aboutme' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(true)
            setProjectsUnderlined(false)
            setContactUnderlined(false)
        } else if ( pageUrl === window.location.origin + '/projects' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(true)
            setContactUnderlined(false)
        } else if ( pageUrl === window.location.origin + '/contact' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(false)
            setContactUnderlined(true)
        }
    })

    return (
        <header className="header">
            <div onClick={ event => window.location.href ='/' } className= { HomeUnderlined ? "page-selection-underlined" : "page-selection" }>Home</div>
            <div onClick={ event => window.location.href ='/aboutme' } className= { AboutMeUnderlined ? "page-selection-underlined" : "page-selection" }>About Me</div>
            <div onClick={ event => window.location.href ='/projects' } className= { ProjectsUnderlined ? "page-selection-underlined" : "page-selection" }>Projects</div>
            <div onClick={ event => window.location.href ='/contact' } className= { ContactUnderlined ? "page-selection-underlined" : "page-selection" }>Contact</div>
            <div className= "page-selection">My Resume</div>
        </header>
    );
};