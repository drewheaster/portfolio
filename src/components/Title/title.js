import React from 'react'
import './style.css'
import Container from '../Container/container'


export default function Title(){

    // some function that returns data

    // variable that stores data
    const data = "File Renamer"
    return (
        <div>
        <h1 class='color'>{data}</h1>
        <Container></Container>
        </div>
    )
}