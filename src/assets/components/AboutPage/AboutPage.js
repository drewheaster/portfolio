import React from 'react'
import './styles.css'
import ProfilePic from '../../images/IMG_0184.jpg'

export default function AboutPage(props) {
    return(
        <main className='about-main'>
            <div className='about-center-piece'>
                <div className='about-selection-box'>
                    <div className='about-profile-image-box'>
                        <img onClick={event => window.location.href="/"} src={ProfilePic} className='about-profile-pic-image'></img>
                    </div>
                    <div className='about-description-box'>
                        <h1 className='about-me-title'>About Me</h1>
                            <p className='about-me-desc'>My name is Drew! I'm currently a junior front-end developer at Havyn. I started my coding journey in early 2023, creating a new obsession. I love working in Python, and have started learning JavaScript and HTML to create web-applications. In the future, I would love to be working full-time as a part of my own startup company. Currently, I work full-time as a product photographer, but I have leveraged some of my new coding skills to make life easier for my team at work. I love playing guitar, video games, and pickleball when I'm not working on a script!</p>
                            <a className='about-me-email-button' href='mailto:drewheaster@gmail.com'>Contact Me</a>     
                    </div>
                </div>
            </div>
        </main>
    );
}