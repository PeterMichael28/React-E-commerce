import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <section id="hero" className="sec-p d-flex flex-column justify-content-center w-100">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h2 className="h2-green">On all products</h2>
            <p>Save more with coupons and up to 70% off!</p>
            <Link to="/shop" className="hero-btn d-flex justify-content-center align-items-center">Shop now</Link>
        </section>
     );
}
 
export default Hero;