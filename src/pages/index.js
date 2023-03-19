import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Creators from "../components/Creators"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Service from "../components/Service"

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <section className="service-section">
        <div className="service-text">
          <h3>Our Services</h3>
          <span>We believe in the philosophy of collective growth, and the same is seen in the value addition given to our partners over and beyond the basics. We currently are focused on 3 main offerings:</span>
        </div>


        <div className="services">
          <div className="service">
            <StaticImage src="../assets/images/rocket.png" className="service-icon"/>
            <h4>Influencer Marketing</h4>
            <p>Curating influencer marketing campaigns to match your brand’s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.</p>
          </div>

          <div className="service">
            <StaticImage src="../assets/images/video.png" className="service-icon"/>
            <h4>AD Production</h4>
            <p>Curating influencer marketing campaigns to match your brand’s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.</p>
          </div>

          <div className="service">
            <StaticImage src="../assets/images/megaphone.png" className="service-icon"/>
            <h4>IP Content Creation</h4>
            <p>Curating influencer marketing campaigns to match your brand’s objective, aligning content and ensuring efficiency in each step, is what Finnet Media does best.</p>
          </div>
        </div>
      </section>

      <Service/>
      <Creators/>

      <section className="video-sec">
        <h3>Watch our beautiful journey</h3>
        <StaticImage src='../assets/images/sshot6.png' className="video" alt="showreel"/>
      </section>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
