import Logo3 from '../assets/logo.png'
import Logo4 from '../assets/pay/app.jpg'
import Logo5 from '../assets/pay/play.jpg'
import Logo6 from '../assets/pay/pay.png'



const Footer = () => {
    return ( 
        <footer className="sec-t sec-p d-flex justify-content-center align-items-center w-100 flex-column">
        <div id="footer">
            <div className="footer1">
                <img src={Logo3} alt="logo" />
                <div>
                    <h1>Contact</h1>
                    <p><strong>Address:</strong> Ibadan, Oyo state, Nigeria</p>
                    <p><strong>Phone:</strong> +2348036314163</p>
                    <p><strong>Hours:</strong> 09:00 - 18:00 Mon-Sat</p>
                    <p><strong>Email:</strong> enitanpeters28@gmail.com</p>
                </div>
                <div>
                    <h2 className="follow">Follow Us</h2>
                    <div>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-whatsapp"></i>
                    </div>
                </div>
            </div>
            <div className="foot">
            <div className="footer2">
                <h1>About</h1>
                <a href="#/">About Us</a>
                <a href="#/">Delivery Information</a>
                <a href="#/">Privacy Policy</a>
                <a href="#/">Terms & Conditions</a>
                <a href="#/">Contact Us</a>
            </div>
            <div className="footer2">
                <h1>My Account</h1>
                <a href="#/">Sign In</a>
                <a href="#/">View Cart</a>
                <a href="#/">My Wishlist</a>
                <a href="#/">Track My Order</a>
                <a href="#/">Help</a>
            </div>
            </div>
            <div className="footer3">
                <h1>Install Apps</h1>
                <p>From App Store or Google Play</p>
                <div className="img">
                    <img src={Logo4} alt="logo" />
                    <img src={Logo5} alt="logo" />
                </div>
                <p>Secure Payment Gateways</p>
                <img src={Logo6} alt="logo" />
            </div>
        </div>
        <p className="copyright">@2022 Copyright PeterMichael</p>
    </footer>
     );
}
 
export default Footer;