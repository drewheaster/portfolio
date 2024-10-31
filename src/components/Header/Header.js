import React, { useEffect, useState } from "react";
import Resume from '../../assets/images/Drew-Easter-Resume.pdf'
import './style.css'

export default function Header(props) {

    let [ HomeUnderlined, setHomeUnderlined ] = useState(false)
    let [ AboutMeUnderlined, setAboutMeUnderlined ] = useState(false)
    let [ ProjectsUnderlined, setProjectsUnderlined ] = useState(false)
    let [ ContactUnderlined, setContactUnderlined ] = useState(false)

    let pageUrl = window.location.href


    const dropInAnimation = 'animation: drop-in 1s 1s; visibility: hidden; animation-fill-mode: forwards;'
    const noDropInAnimation = 'visibility: visible;'

    useEffect (() => {

        const header = document.getElementById('header-container');

        if ( pageUrl === window.location.origin + '/' ) {
            setHomeUnderlined(true)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(false)
            setContactUnderlined(false)
            header.setAttribute('style', dropInAnimation)
        } else if ( pageUrl === window.location.origin + '/aboutme' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(true)
            setProjectsUnderlined(false)
            setContactUnderlined(false)
            header.setAttribute('style', noDropInAnimation)
        } else if ( pageUrl === window.location.origin + '/projects' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(true)
            setContactUnderlined(false)
            header.setAttribute('style', noDropInAnimation)
        } else if ( pageUrl === window.location.origin + '/contact' ) {
            setHomeUnderlined(false)
            setAboutMeUnderlined(false)
            setProjectsUnderlined(false)
            setContactUnderlined(true)
            header.setAttribute('style', noDropInAnimation)
        }
    })

    return (
        <header className="header" id="header-container">
            <div onClick={ event => window.location.href='/' } className= { HomeUnderlined ? "page-selection-underlined" : "page-selection" }>Home</div>
            <div onClick={ event => window.location.href ='/aboutme' } className= { AboutMeUnderlined ? "page-selection-underlined" : "page-selection" }>About Me</div>
            <div onClick={ event => window.location.href ='/projects' } className= { ProjectsUnderlined ? "page-selection-underlined" : "page-selection" }>Projects</div>
            <div onClick={ event => window.location.href ='/contact' } className= { ContactUnderlined ? "page-selection-underlined" : "page-selection" }>Contact</div>
            <a href={Resume} download="Resume" target='_blank' className="page-selection">My Resume</a>
        </header>
    );
};