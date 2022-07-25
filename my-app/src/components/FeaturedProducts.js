import SinglePro from "../sm-components/SinglePro";
import Logo1 from '../assets/products/f1.jpg'
import Logo2 from '../assets/products/f2.jpg'
import Logo3 from '../assets/products/f3.jpg'
import Logo4 from '../assets/products/f4.jpg'
import Logo5 from '../assets/products/f5.jpg'
import Logo6 from '../assets/products/f6.jpg'
import Logo7 from '../assets/products/f7.jpg'
import Logo8 from '../assets/products/f8.jpg'

const FeaturedProducts = () => {
    return ( 
        <section id="products" className="sec-p sec-t w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="sec-title">Featured Products</h1>
        <p>Summer Collection New Model Design</p>
        <div className="products w-100 d-flex justify-content-center align-items-center flex-wrap mt-3">
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo1} id='1'/>
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo2} id='2' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo3} id='3' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo4} id='4' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo5} id='5' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo6} id='6' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo7} id='7' />
           <SinglePro price={Number(6000)} brand='adidas' type='Vintage Shirts' img={Logo8} id='8' />
        </div>
    </section>

     );
}
 
export default FeaturedProducts;