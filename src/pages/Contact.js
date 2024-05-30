import React from "react";
import ContactPage from '../components/ContactPage/ContactPage';
import Header from '../components/Header/Header';


export default function Contact(props) {
    return (
        <>
            <div className="main-bg">
                <Header/>
                <ContactPage/>
            </div>
        </>
    )
}