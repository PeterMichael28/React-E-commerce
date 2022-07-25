import { Link } from "react-router-dom";

const HomeBanner1 = () => {
    return ( 
        <section id="banner1" className="sec-t d-flex justify-content-center align-items-center flex-column">
        <h5>Repair Services</h5>
        <h2>Up to <span>70% off</span> - All t-Shirts & Accessories</h2>
        <Link to="/shop">Explore More</Link>
        </section>
     );
}
 
export default HomeBanner1;