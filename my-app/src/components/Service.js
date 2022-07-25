import FeaturesCard from "../sm-components/ServiceCard";
import Logo1 from '../assets/features/f1.png'
import Logo2 from '../assets/features/f2.png'
import Logo3 from '../assets/features/f3.png'
import Logo4 from '../assets/features/f4.png'
import Logo5 from '../assets/features/f5.png'
import Logo6 from '../assets/features/f6.png'

const Features = () => {
    return ( 
        <section id="services" className="sec-p sec-t d-flex justify-content-center align-items-center flex-wrap">
            <FeaturesCard img={Logo1} text='Free Shipping' />
            <FeaturesCard img={Logo2} text='Online Order' />
            <FeaturesCard img={Logo3} text='Save Money' />
            <FeaturesCard img={Logo4} text='Promotions' />
            <FeaturesCard img={Logo5} text='HAppy sell' />
            <FeaturesCard img={Logo6} text='F24/7 Support' />
    </section>
     );
}
 
export default Features;