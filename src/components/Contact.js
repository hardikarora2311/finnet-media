import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {FiPhoneCall} from "react-icons/fi"

const Contact = () => {
  return (
<section className="contact-section">
    <div className="contact-wrapper">
        <div className="wrapper-text">
            <h1>We can't wait to hear from you!</h1>
            <ul className="contact-list">
                <li> <HiOutlineMail className="contact-icons"/>work@finnetmedia.com</li>
                <li><FiPhoneCall className="contact-icons"/> +91-1234556666</li>
            </ul>
        </div>
        <div className="wrapper-form">
            <form action="" className="formm">
                <input type="text" placeholder="Name*" className="inputss"/>
                <input type="text" placeholder="Email*" className="inputss"/>
                <input type="text" placeholder="Subject*" className="inputss"/>
                <textarea name=" message" className="inputss msg" placeholder="Your Message*"></textarea>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
      
    </div>
</section>
  )
}

export default Contact