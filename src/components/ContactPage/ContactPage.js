import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./style.css";

export default function ContactPage(props) {

    const location = useLocation();

    const setItemWithDelay = (key, value) => {
        setTimeout(() => {
          sessionStorage.setItem(key, value);
          console.log(`${key} set to ${value} in sessionStorage`);
        }, 0);
    };

    useEffect(() => {
        // Store the previous location in sessionStorage
        const pageContainer = document.getElementById('contact-page-container');
        const prevLocation = sessionStorage.getItem('prevLocation');

        if(prevLocation === '/') {
            pageContainer.setAttribute('style', `
                width: 95%;
                height: 90%;
                border-top-right-radius: 30rem; 
                border-bottom-right-radius: 30rem;
                animation: expand 1s .2s;
                animation-fill-mode: forwards;`
            );
        } else {
            pageContainer.setAttribute('style', 'width: 100%; height: 100%');
        }

        setItemWithDelay('prevLocation', location.pathname)
    });


    return (
        <>
            <div className="page-bg">
                <div className="page-main-container" id="contact-page-container">
                    <form action="https://api.web3forms.com/submit" method="POST" class="contact-form" target="_blank">
                        <input type="hidden" name="access_key" value="f191010d-537c-4d1a-82dc-18de556affea"/>
                        <input type="text" name="name" placeholder="Your Name" class="contact-form-inputs" required/>
                        <input type="text" name="email" placeholder="Your Email" class="contact-form-inputs" required/>
                        <textarea name="message" placeholder="Message me!" class="contact-form-inputs" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    );
};