import SinglePro from "../sm-components/SinglePro";
import Logo1 from '../assets/products/n1.jpg'
import Logo2 from '../assets/products/n2.jpg'
import Logo3 from '../assets/products/n3.jpg'
import Logo4 from '../assets/products/n4.jpg'
import Logo5 from '../assets/products/n5.jpg'
import Logo6 from '../assets/products/n6.jpg'
import Logo7 from '../assets/products/n7.jpg'
import Logo8 from '../assets/products/n8.jpg'

const NewProducts = () => {
    return ( 
        <section id="products" className="sec-p sec-t w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="sec-title">New Products</h1>
        <p>Summer Collection New Model Design</p>
        <div className="products w-100 d-flex justify-content-center align-items-center flex-wrap mt-3">
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo1} id='9' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo2} id='10' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo3} id='11' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo4} id='12' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo5} id='13' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo6} id='14' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo7} id='15' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo8} id='16' />
        </div>
    </section>

     );
}
 
export default NewProducts;