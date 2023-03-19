import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="hero-text">
            <StaticImage src='../assets/images/fireworks.png' className='hero-icons fire'/>    
            <StaticImage src='../assets/images/pinterest.svg' className='hero-icons pinterest'/>
            <StaticImage src='../assets/images/youtube.png' className='hero-icons youtube'/>    
            <StaticImage src='../assets/images/insta.png' className='hero-icons insta'/>
            <StaticImage src='../assets/images/facebook.png' className='hero-icons facebook'/>       
            <StaticImage src='../assets/images/target.png' className='hero-icons emoji'/>    
            <StaticImage src='../assets/images/thumb.png' className='hero-icons views'/>    
            <span>Empowering Creators,<br></br>Enabling Brands.</span>
            <small className='hero-small'>Finnet Media works to build strong and truthful relationships between brands, creators and the consumers.</small>
            <div className="hero-btns">
                <div className="hero-cta btns">Get Started</div>
                <div className="hero-scndry-btn btns">How We Work? </div>
            </div>
        </div>

    </div>
  )
}

export default Hero