import React from 'react'
import './Inventery.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import audi from '../Images/audi.jpg'
import Proton from '../Images/Ptoton.jpg'
import BMW from '../Images/BMW.jpg'
import mg from '../Images/mg.webp'
import hon from '../Images/honda.jpg'
import fo from '../Images/fortuner.jpg'
import tes from '../Images/tesla.webp'
import mer from '../Images/mercades.jpg'
import ele from '../Images/electric.png'


const Inventery = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <center><h1><b>Invevtery</b></h1></center>
        
          <main>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={audi} alt="Toyota Corolla"/></td>
                    <td>Audi</td>
                    <td>R8</td>
                    <td>2018</td>
                    <td>$180,000</td>
                </tr>
                <tr>
                    <td><img src={Proton} alt="Honda Civic"/></td>
                    <td>Proton</td>
                    <td>Ht</td>
                    <td>2021</td>
                    <td>$20,000</td>
                </tr>
                <tr>
                    <td><img src={BMW} alt="Ford Mustang"/></td>
                    <td>BMW</td>
                    <td>M3</td>
                    <td>2021</td>
                    <td>$26,000</td>
                </tr>
                <tr>
                    <td><img src={mer} alt="Chevrolet Malibu"/></td>
                    <td>Mercades</td>
                    <td>Benz</td>
                    <td>2019</td>
                    <td>$25,000</td>
                </tr>
                <tr>
                    <td><img src={mg} alt="Toyota Corolla"/></td>
                    <td>MG</td>
                    <td>Fot</td>
                    <td>2020</td>
                    <td>$18,000</td>
                </tr>
                <tr>
                    <td><img src={hon} alt="Honda Civic"/></td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2019</td>
                    <td>$20,000</td>
                </tr>
                <tr>
                    <td><img src={fo} alt="Ford Mustang"/></td>
                    <td>Fortuner</td>
                    <td>Dsl</td>
                    <td>2021</td>
                    <td>$26,000</td>
                </tr>
                <tr>
                    <td><img src={tes} alt="Chevrolet Malibu"/></td>
                    <td>Tesla</td>
                    <td>Ekectric</td>
                    <td>2018</td>
                    <td>$160,000</td>
                </tr>
                <tr>
                    <td><img src={ele} alt="Toyota Corolla"/></td>
                    <td>Toyota</td>
                    <td>Corolla</td>
                    <td>2020</td>
                    <td>$18,000</td>
                </tr>
               
                
            </tbody>
        </table>
    </main>
    <Footer/>
    </div>
   
  )
}

export default Inventery