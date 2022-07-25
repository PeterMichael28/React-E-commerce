import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import GenBanner from "../components/GenBanner";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import '../css/Home.css'

const Shop = () => {
    return ( 
        <div>
             <Navbar />
            <main>
             <GenBanner one='#stayhome' two='Save more with coupons & up to 70% off' clas='shop' />
             <AllProducts />
             <NewsLetter />
            </main>
            <Footer />
        </div>
     );
}
 
export default Shop;