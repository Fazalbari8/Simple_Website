import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import gwan from '../Images/gwan.jpg'
import sayam from '../Images/sayam.avif'
import rehman from '../Images/rehman.jpeg'
import kareem from '../Images/kareem.jpg'
import bari from '../Images/bari.avif'
import aur from '../Images/aur.jpg'
const About = () => {
  return (
    <div>
        <Navbar/>
        <br/>
         <center><h1><b>About Us</b></h1></center>

    <section class="about-us">
        <div class="con">
            <div class="about-content">
                <div class="image">
                    <img src={gwan} alt="Car Showroom"/>
                </div>
                <div class="text">
                    <h2>Our Mission</h2>
                    <p>
                        At Car Dealership, we aim to provide the best car buying experience. 
                        Our website offers a vast selection of vehicles, transparent pricing, 
                        and an easy-to-navigate interface. Whether you're looking for a new 
                        or used car, we have something for everyone.
                    </p>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Wide variety of cars</li>
                        <li>Transparent pricing</li>
                        <li>Expert advice</li>
                        <li>Financing options</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
     <div className='t'>
       <h1><center><b>Our Teams</b></center></h1>
       <br/>
    <section class="team">
        <div class="team-member">
            <img src={kareem} alt="John Doe"/>
            <h2>Fazal_Kareem</h2>
            <h3>Website Developer</h3>
            <p>Our web developer ensures our website is user-friendly, visually appealing, and efficient, enhancing your online experience.</p>
        </div>
        <div class="team-member">
            <img src={rehman} alt="Jane Smith"/>
            <h2>Rehman</h2>
            <h3>Office Manager</h3>
            <p>Our office manager ensures smooth operations, handling administrative tasks and coordinating team efforts efficiently.</p>
        </div>
        <div class="team-member">
            <img src={bari} alt="John Doe"/>
            <h2>Fazal_Bari</h2>
            <h3>Digital Marketing</h3>
            <p>Our office manager ensures smooth operations, handling administrative tasks and coordinating team efforts efficiently.</p>
        </div>
        <div class="team-member">
            <img src={sayam} alt="Jane Smith"/>
            <h2>Sayam</h2>
            <h3>Sales Manager</h3>
            <p>Our sales manager drives our dealership’s success, leading the sales team with expertise and dedication to provide exceptional customer service and achieve outstanding sales results.</p>
        </div>
        <div class="team-member">
            <img src={aur} alt="Jane Smith"/>
            <h2>Aurangzaib</h2>
            <h3>CEO</h3>
            <p>Our CEO leads with vision and dedication, driving our dealership towards excellence and growth.</p>
        </div>
        
    </section>
    <br/>
    </div>
    <Footer/>
    </div>
  )
}

export default About