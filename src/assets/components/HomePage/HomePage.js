import React from 'react'
import './styles.css'
import ProfilePic from '../../images/IMG_0184.jpg'

export default function HomePage(props) {
    return(
        <main className='home-main'>
            <div className='home-center-piece'>
                <div className='home-selection-box'>
                    <div className='home-profile-image-box'>
                        <img src={ProfilePic} className='home-profile-pic-image'></img>
                        <div className='pic-overlay'>
                            <div className='home-profile-name-header-text'>Drew Easter</div>
                        </div>
                    </div>
                    <div className='home-navigation-selector-box'>
                        <div onClick={event => window.location.href='/about'} className='home-about-button'>
                            <p>ABOUT</p>
                        </div>
                        <div onClick={event => window.location.href='/projects'} className='home-projects-button'>
                            <p>PROJECTS</p>
                        </div>
                        <a className='home-my-resume-button' href='./Resume.pdf' target="_blank" rel="noopener noreferrer" data-position="bottom" data-tooltip="resume" download="Resume.pdf">MY RESUME</a>
                    </div>
                </div>
            </div>
        </main>
    );
}