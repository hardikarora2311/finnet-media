import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {FiPhoneCall} from "react-icons/fi"
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-company">
            <StaticImage src='../assets/images/logo.webp' alt='Finnet Media' class="footer-logo"/>
            <span>We take pride in the content creators we associate with, whose goals are aligned with ours</span>
            <form action="" className="footer-form">
                    <input type="text"  placeholder='Enter your email'/><button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="footer-services">
            <h2>Services</h2>
            <ul className="footer-list">
                <li className="footer-pills">Creators</li>
                <li className="footer-pills">Brands</li>
                <li className="footer-pills">How it works?</li>
            </ul>
        </div>
        <div className="footer-contact">
            <h2>Contact Info</h2>
            <ul className="contact-list">
                <li> <HiOutlineMail className="contact-icons"/>work@finnetmedia.com</li>
                <li><FiPhoneCall className="contact-icons"/> +91-1234556666</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer