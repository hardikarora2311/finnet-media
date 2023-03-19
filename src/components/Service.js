import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Service = () => {
  return (
    <section className="service-wrapper">
        <div className="service-main">
            <StaticImage src='../assets/images/sshot2.png' className='service-photo'/>
            <div className="service-main-text">
                <h3>Influencer Marketing</h3>
                <p>Curating influencer marketing campaigns to match your brand’s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.</p>
                <p>Numerous brands like CRED, ET Money, SmallCase, Niyo Global and many many more have trusted us to plan, execute and monitor influencer campaigns. Right from the word go, we ensure data-focused and personality alignments of brands with creators, to help empower creators and help enable brands simultaneously.</p>
            </div>
        </div>


        <div className="service-main second">
            <StaticImage src='../assets/images/sshot3.png' className='service-photo'/>
            <div className="service-main-text">
                <h3>AD Production</h3>
                <p>For when you want to hook your audience, build a bond, or create your best impression, we are here to help you!</p>
                <p>Finnet Media helps you curate cinematically sound, and well-scripted advertisements with India’s top creators! We build a bond by carefully weaving ideas and giving a creative structure to a bleak idea and converting it into a powerful ad. Be it running ads digitally, on television or a more traditional approach, we got you! Having worked on ads for numerous brands like ZEST Money, Stockgro, Tyke and many more, we’ve been the team that helps bring your dream projects to reality without burning a hole in your pockets!</p>
            </div>
        </div>


        <div className="service-main">
            <StaticImage src='../assets/images/sshot4.png' className='service-photo'/>
            <div className="service-main-text">
                <h3>IP Content Creation</h3>
                <p>Gone are the days when influencers were meant only for social media. With the increasing popularity of content creators along with their credibility and creativity, it only makes sense to leverage this across platforms. That’s where Finnet Media has got you back! Content for your brand’s social media, website, application, or YouTube series or show, content creators can definitely change the game for your brand! Having worked with numerous brands on different channels, it is safe to say - content creators are the way!</p>
            </div>
        </div>



    </section>
  )
}

export default Service