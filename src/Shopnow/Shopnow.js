import React from 'react'
import './Shopnow.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import mg from '../Images/mg.webp'
import hon from '../Images/honda.jpg'
import fo from '../Images/fortuner.jpg'
import tes from '../Images/tesla.webp'
import mer from '../Images/mercades.jpg'
import ele from '../Images/electric.png'
const Shopnow = () => {
    var a =parseInt(prompt("Please Rate Our Website Out Of 10?"));
    if ( a<0 ) {
         alert('Which thing you didn`t like in our website.');
    }
    else if(a<5){
        alert("Thank You For Your Ranking.")
    }
    else if(a<7) {
        alert("Thanks for your trust.")
    }
    else {
        alert("Thank You .")
    }
    console.log('Done')
  return (
    <div>
        <Navbar/>
        <br/>
        <center><b><h1>Shop Now</h1></b></center>
        <main>
        <section class="products">
            
            <article class="product">
                <img src={mg} alt="Product 1"/>
                <h2>MG</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
            <article class="product">
                <img src={mer} alt="Product 1"/>
                <h2>Mercades</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
            <article class="product">
                <img src={hon} alt="Product 1"/>
                <h2>Honda Civic</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
            <article class="product">
                <img src={fo} alt="Product 1"/>
                <h2>Fortuner</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
            <article class="product">
                <img src={ele}alt="Product 1"/>
                <h2>BMW</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
            <article class="product">
                <img src={tes} alt="Product 1"/>
                <h2>Tesla</h2>
                <p>$29.99</p>
                <br/>
                <button>Buy Now</button>
            </article>
           
        </section>
    </main>
     <Footer/>
    </div>
  )
}

export default Shopnow