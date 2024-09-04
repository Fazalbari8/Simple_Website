import React from 'react'
import './Coontact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Contact = () => {
  // let a =parseInt (prompt('Do you like to contract with us'))
  // console.log(a)
  return (
    <div>
      <Navbar/>
        <br/>
        <center><b><h1>Contact Us</h1></b></center>
        <br/>
        <div class="ta">
        <div class="contact-info">
            <h2>Our Address</h2>
            <p>123 Car Dealership Lane</p>
            <p>Automobile City, AC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@cardealership.com</p>
        </div>
        <div class="contact-form">
            <h2>Fill the Form</h2>
            <form action="submit_form.php" method="POST">
                <label for="name"><b>Name:</b></label>
                <input type="text" id="name" name="name" required/>

                <label for="email"><b>Email:</b></label>
                <input type="email" id="email" name="email" required/>

                <label for="message"><b>Message:</b></label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </div>
  )
}
export default Contact