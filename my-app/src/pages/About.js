import React from 'react'
import Footer from "../components/Footer";
import GenBanner from "../components/GenBanner";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import '../css/About.css'
import Logo10 from '../assets/about/1.mp4'
import Logo11 from '../assets/about/a6.jpg'
import Services from "../components/Service";

const About = () => {
  return (
    <div>
    <Navbar active='active' />
   <main>
    <GenBanner one='#KnowUs' two='Get to know more about us' clas='about-banner' />
    <section id="about-head" className="sec-t sec-p">
        <div className="head-img">
            <img src={Logo11} alt="logo" />
        </div>
        <div className="head-texts">
            <h1>Who We Are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis temporibus, laudantium voluptas nam facere eaque labore laboriosam beatae ipsam pariatur delectus! Numquam officiis dolores consectetur magni iusto quae asperiores voluptate nihil sunt, deserunt dolorem temporibus aperiam esse nostrum corporis adipisci autem? Vero vel mollitia, eum rerum maxime ab quibusdam.</p>

            <p>Lorem ipsum dolor sit amet ctur  officiis eius animi vero earum, libero eveniet omnis ab provident.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eum, necessitatibus molestias et dolor quod!</p>
            <br></br>

            <div className="marquee">
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae quod exercitationem aliquid consectetur ullam? Tempora vitae quam natus
                     ab officia quis maxime esse. Omnis, recusandae.
                </p>
            </div>
               
        </div>
    </section>

    <section id="about-app" className="sec-t sec-p">
        <h2>Download Our <a href="#/">App</a></h2>
        <div className="about-video">
            <video autoPlay muted loop src={Logo10}></video>
        </div>
    </section>
    <Services />
    <NewsLetter />
   </main>
   <Footer />
</div>
  )
}



export default About