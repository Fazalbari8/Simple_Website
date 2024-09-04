import React from 'react'
import './Body.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import audi from '../Images/audi.jpg'
import Proton from '../Images/Ptoton.jpg'
import BMW from '../Images/BMW.jpg'
import mg from '../Images/mg.webp'
import hon from '../Images/honda.jpg'
import ha from '../Images/havel.jpg'
import fo from '../Images/fortuner.jpg'
import tes from '../Images/tesla.webp'
import mer from '../Images/mercades.jpg'
import ele from '../Images/electric.png'
import gwana from '../Images/gwan.jpg'
import hav from '../Images/havelbest.webp'
import pr from '../Images/prado.jpeg'
import benz from '../Images/benz.jpg'
import ppp from '../Images/ppp.jpg'




const Body = () => {
    return (
        
        <div>
            <Navbar/>
            <div>
                <div class="hero">
                    <div class="hero-text">
                        <h2>Welcome to Car DealerShip</h2>
                        <p>
                            Welcome to Car Dealrship! We offer a curated selection of top-quality cars to fit every lifestyle. Our friendly team is here to help you find your ideal vehicle with ease. Explore our range online or visit us today to drive away in your dream car!
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <center><h2><b>OUR CARS PRODUCTION</b></h2></center>
            <div class="container">
                <div class="card">
                    <img src={audi} alt="Image 1" />
                    <h3>AUDI R8</h3>
                    <button class="primary-button">Learn More</button>


                </div>
                <div class="card">
                    <img src={Proton} alt="Image 2" />
                    <h3>PROTON</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={mg} alt="Image 3" />
                    <h3>MG</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={mer} alt="Image 4" />
                    <h3>MERCADES</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={fo} alt="Image 5" />
                    <h3>FORTUNER</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={tes} alt="Image 6" />
                    <h3>TESLA</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={hon} alt="Image 7" />
                    <h3>HONDA</h3>
                    <button class="primary-button">Learn More</button>

                </div>
                <div class="card">
                    <img src={ha} alt="Image 8" />
                    <h3>HAVEL</h3>
                    <button class="primary-button">Learn More</button>

                </div>
            </div>
            <center><b><h1>OUR CARS GALERY</h1></b></center>
            <div class="gallery">
                
        <div class="gallery-item">
            <img src={ele} alt="Car 1"/>
        </div>
        <div class="gallery-item">
            <img src={mer} alt="Car 2"/>
        </div>
        <div class="gallery-item">
            <img src={gwana} alt="Car 3"/>
        </div>
        <div class="gallery-item">
            <img src={fo} alt="Car 4"/>
        </div>
        <div class="gallery-item">
            <img src={pr} alt="Car 5"/>
        </div>
        <div class="gallery-item">
            <img src={hav} alt="Car 6"/>
        </div>
        {/* <div class="gallery-item">
            <img src={fo}  alt="Car 7"/>
        </div> */}
        <div class="gallery-item">
            <img src={benz} alt="Car 8"/>
        </div>
    </div>
      <br/>
      <Footer/>
        </div>
        

    )
}

export default Body