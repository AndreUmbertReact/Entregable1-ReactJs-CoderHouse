import React from 'react';
import "./Footer.css";
import { AiFillInstagram } from 'react-icons/ai';



const Footer = () => {
    return (
        <div className='footerContainer'>
            <p className='footerText'>Follow us on our social networks to be aware of new products!</p>
            <a className='instagramIconAnchor' href='https://www.instagram.com/namour.handbags/?hl=es-la'><AiFillInstagram className='instagramIcon' /></a>
        </div>
    )
}

export default Footer;