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
                    </div>
                    <div className='home-navigation-selector-box'>

                    </div>
                </div>
            </div>
        </main>
    );
}