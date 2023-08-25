import React from 'react';
import fr_img from '../../images/file-renamer.jpg'
import reciept_img from '../../images/menu-select.jpg'
import hangman_img from '../../images/hangman.jpg'
import './styles.css'

export default function projects() {
    return (
        <div className='projects-container background'>
            <div className='projects-tile'>
                <a className='color' href ='https://github.com/drewheaster/file-renamer'><h1>File Renamer</h1></a>
                <img className='size' src={fr_img}></img>
            </div>
            <div className='projects-tile'>
                <a className='color' href ='https://github.com/drewheaster/restaurant-receipt'><h1>Receipt Generator</h1></a>
                <img className='size' src={reciept_img}></img>
            </div>
            <div className='projects-tile'>
                <a className='color' href ='https://github.com/drewheaster/hangman-game'><h1>Hangman Game</h1></a>
                <img className='size' src={hangman_img}></img>
            </div>
        </div>
    );
}

