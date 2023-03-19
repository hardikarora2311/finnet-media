import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const About = () => {
  return (
    <>
    <section className="about-sec">
        <h3>Our Key Features & Why We Are Different From Others</h3>
        <div className="service-about">
            <div className="service-card">
                <StaticImage src='../assets/images/growth.png' className='service-image'/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div className="service-card">
                <StaticImage src='../assets/images/brand.png' className='service-image'/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div className="service-card">
                <StaticImage src='../assets/images/team.png' className='service-image'/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div className="service-card">
                <StaticImage src='../assets/images/insight.png' className='service-image'/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div className="service-card">
                <StaticImage src='../assets/images/trophy.png' className='service-image'/>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>
        </div>
    </section>
    <section className="numbers-sec">
        <div className="number-card">
            <div className="number-bold">1K+</div>
            <small>Verified Influencers</small>
        </div>
        <div className="number-card">
            <div className="number-bold">5K</div>
            <small>Top Brands & Startups</small>
        </div>

        <div className="number-card">
            <div className="number-bold">100+</div>
            <small>Succesful Campaigns</small>
        </div>

        <div className="number-card">
            <div className="number-bold">1K+</div>
            <small>5 Star Reviews</small>
        </div>



    </section>
    </>
    
  )
}

export default About