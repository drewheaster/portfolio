import React from 'react'
import './styles.css'
import FileCopierImg from '../../images/file-renamer.jpg'
import HavynImg from '../../images/Havyn-img.png'
import ImageProcessingImg from '../../images/image-processing-img.jpg'
import PasswordGenImg from '../../images/password-gen-img.png'
import ReceiptGenImg from '../../images/receipt-gen-img.png'

export default function ProjectsPage(props) {
    return(
        <div className='projects-main'>
            <div className='projects-background'>
                <div className='projects-banner'>Projects</div>
                <div className='projects-box1'>
                    <div className='project-box-description-img'>
                        <img className='project-box-description-img-picture' src={HavynImg}></img>
                    </div>
                    <div className='project-box-description-text-box'>
                        <h1 className='project-box-description-title'>Havyn</h1>
                        <p className='project-box-text'>Creating and developing an innovative Real Estate software that leverages AI/Machine Learning to elevate the entire Real Estate industry. I'm currently a junior developer, working mainly on the front-end of the application while gaining exposure to the back-end processes and functionality to broaden my skillset.</p>
                    </div>
                </div>
                <div className='projects-box2'>
                    <div className='project-box-description-img'>
                    <img className='project-box-description-img-picture' src={ImageProcessingImg}></img>
                    </div>
                    <div className='project-box-description-text-box'>
                        <h1 className='project-box-description-title'>Infinite Electronics Image Processor</h1>
                        <p className='project-box-text'>This image processor is my first fully-developed application that is used by my current employer to make mine and my team's jobs more efficient. It has functions to copy, rename, resize, move, and publish images throughout our servers for  different brand websites.</p>
                    </div>
                </div>
                <div className='projects-box3'>
                    <div className='project-box-description-img'>
                        <img className='project-box-description-img-picture' onClick={event => window.location.href='https://github.com/drewheaster/file-renamer'} src={FileCopierImg}></img>
                    </div>
                    <div className='project-box-description-text-box'>
                        <h1 className='project-box-description-title'>File Copier</h1>
                        <p className='project-box-text'>This is a file renaming application that will take the input file-name and the separate list of other file-names desired, create a list from those desired names, and then make copies of the original with the new, chosen names. This has also been an application that was created for making my team's jobs more efficient.</p>
                    </div>
                </div>
                <div className='projects-box4'>
                    <div className='project-box-description-img'>
                        <img className='project-box-description-img-picture' src={PasswordGenImg}></img>
                    </div>
                    <div className='project-box-description-text-box'>
                        <h1 className='project-box-description-title'>Password Generator</h1>
                        <p className='project-box-text'>This script is a password generator that will ask for a desired length of a randomized password and then create said password based on the number given.</p>
                    </div>
                </div>
                <div className='projects-box5'>
                    <div className='project-box-description-img'>
                        <img className='project-box-description-img-picture' src={ReceiptGenImg}></img>
                    </div>
                    <div className='project-box-description-text-box'>
                        <h1 className='project-box-description-title'>Restaurant Ordering Script</h1>
                        <p className='project-box-text'>This was a script designed to mimic a restaurant ordering kiosk, minus the payment. It will allow a user to browse through a menu of items, select how many and which items they want, and then print out a receipt with all of the chosen items and prices. The total includes a sub total, a sales tax of 8.25%, and the total with tax included.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}