import React from 'react'
import Footer from '../components/Footer'
import GenBanner from '../components/GenBanner'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import ClientDetails from '../sm-components/ClientDetails'

import Logo1 from '../assets/people/1.png'
import Logo2 from '../assets//people/2.png'
import Logo3 from '../assets//people/3.png'
import Logo8 from '../assets/blog/b7.jpg'
import '../css/Contact.css'


const Contact = () => {
  return (
    <div>
    <Navbar  />
   <main>
    <GenBanner one="#let's_talk" two='LEAVE A MESSAGE. We love to hear from you' clas='about-banner' />
    <section id="contact-map" className="sec-t sec-p d-flex align-items-center justify-content-center flex-xs-column">
        <div className="con-text">
            <span className="span">GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h4>Head Office</h4>
            <ul>
                <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Ibadan, Oyo State, Nigeria</p>
                </li>
                <li>
                    <i className="bi bi-envelope-fill"></i>
                    <p>enitanpeters28@gmail.com</p>
                </li>
                <li>
                    <i className="bi bi-telephone-fill"></i>
                    <p>+2348036314163</p>
                </li>
                <li>
                    <i className="bi bi-clock-fill"></i>
                    <p>Monday to Saturday. 9:00 to 16:00</p>
                </li>
            </ul>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6030300019984!2d3.9061372146209328!3d7.398298499877104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039934455b323dd%3A0x1fb6e548a4151b0b!2sIbadan%20Oyo%20State!5e0!3m2!1sen!2sng!4v1653702954068!5m2!1sen!2sng" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id="con-form" className="sec-t sec-p">
        <form className="con-form">
            <span className="span">LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea rows="8" placeholder="Your Message"></textarea>
            <button className="form-btn2">Send Message</button>
        </form>
        <div className="clients">
           <ClientDetails img={Logo1}/>
           <ClientDetails img={Logo2}/>
           <ClientDetails img={Logo3}/>
           <ClientDetails img={Logo3}/>
        </div>
    </section>
    <NewsLetter />
   </main>
   <Footer />
</div>
  )
}



export default Contact