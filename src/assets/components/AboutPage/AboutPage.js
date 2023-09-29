import React from 'react'
import './styles.css'
import ProfilePic from '../../images/IMG_0184.jpg'

export default function AboutPage(props) {
    return(
        <main className='about-main'>
            <div className='about-center-piece'>
                <div className='about-selection-box'>
                    <div className='about-profile-image-box'>
                        <img onClick={event => window.location.href="/portfolio/"} src={ProfilePic} className='about-profile-pic-image'></img>
                    </div>
                    <div className='about-description-box'>
                        <h1>About Me</h1>
                            <p>This is who I am</p>
                            <p>These are the things I love to do</p>
                            <p>These are my skills</p>
                            <p>My dreams</p>
                    </div>
                </div>
            </div>
        </main>
    );
}