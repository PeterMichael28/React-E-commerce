import Navbar from "../components/Navbar";
import Hero from "../sm-components/Hero";
import '../css/Home.css'
import Services from "../components/Service";
import FeaturedProducts from "../components/FeaturedProducts";
import NewProducts from "../components/NewProducts";
import HomeBanner1 from "../components/HomeBanner1";
import HomeBanner2 from "../components/HomeBanner2";
import HomeBanner3 from "../components/HomeBanner3";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div>
            <Navbar active='active'/>
            <main id="">
                <Hero />
                <Services />
                <FeaturedProducts/>
                <HomeBanner1 />
                <NewProducts />
                <HomeBanner2 />
                <HomeBanner3 />
                <NewsLetter />
                <Footer />
            </main>
        </div>
     );
}
 
export default Home;