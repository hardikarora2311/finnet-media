import React from 'react'
import { useState } from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {HiMenuAlt4} from "react-icons/hi"
import {IoMdClose} from "react-icons/io"


const Navbar = () => {

  const [show,setShow]= useState(false)
  return (
    <nav className="navbar">
         <StaticImage src='../assets/images/logo.webp' alt='Finnet Media' class="logo"/>
         <button className="nav-btn" onClick={()=> setShow(!show)}>{show? <IoMdClose/> : <HiMenuAlt4/>}</button>
         <div className= {show? "show-nav" : "show-nav nav-menu"}>
            <ul className="navlist">
                <li className="nav-pills nav-items">About Us</li><hr></hr>
                <li className="nav-pills nav-items">Creators</li><hr></hr>
                <li className="nav-pills nav-items">Brands</li><hr></hr>
                <li className="nav-pills nav-cta nav-items">Contact</li>
            </ul>
         </div>
    </nav>
  )
}

export default Navbar