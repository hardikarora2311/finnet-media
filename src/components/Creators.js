import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Creators = () => {
  return (
    <section className="creators">
        <h3>Our Creators</h3>
        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</span>
        <div className="creators-div">
            <div className="creator-card">
                <StaticImage src='../assets/images/sharan.png' className='creator-photo'/>
                <div className="name">Sharan Hegde</div>
               <small>@financewithsharan</small>
               <div className="creator-socials"></div>
            </div>

            <div className="creator-card">
                <StaticImage src='../assets/images/sharan.png' className='creator-photo'/>
                <div className="name">Sharan Hegde</div>
               <small>@financewithsharan</small>
               <div className="creator-socials"></div>
            </div>

            <div className="creator-card">
                <StaticImage src='../assets/images/sharan.png' className='creator-photo'/>
                <div className="name">Sharan Hegde</div>
               <small>@financewithsharan</small>
               <div className="creator-socials"></div>
            </div>

            <div className="creator-card">
                <StaticImage src='../assets/images/sharan.png' className='creator-photo'/>
                <div className="name">Sharan Hegde</div>
               <small>@financewithsharan</small>
               <div className="creator-socials"></div>
            </div>

            <div className="creator-card">
                <StaticImage src='../assets/images/sharan.png' className='creator-photo'/>
                <div className="name">Sharan Hegde</div>
               <small>@financewithsharan</small>
               <div className="creator-socials"></div>
            </div>
        </div>

        <div className="creator-cta">Explore More</div>
    </section>
  )
}

export default Creators