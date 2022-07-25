import SinglePro from "../sm-components/SinglePro";
import Logo1 from '../assets/products/n1.jpg'
import Logo2 from '../assets/products/n2.jpg'
import Logo3 from '../assets/products/n3.jpg'
import Logo4 from '../assets/products/n4.jpg'
import Logo5 from '../assets/products/n5.jpg'
import Logo6 from '../assets/products/n6.jpg'
import Logo7 from '../assets/products/n7.jpg'
import Logo8 from '../assets/products/n8.jpg'
import Logo9 from '../assets/products/n1.jpg'
import Logo10 from '../assets/products/n2.jpg'
import Logo11 from '../assets/products/n3.jpg'
import Logo12 from '../assets/products/n4.jpg'
import Logo13 from '../assets/products/n5.jpg'
import Logo14 from '../assets/products/n6.jpg'
import Logo15 from '../assets/products/n7.jpg'
import Logo16 from '../assets/products/n8.jpg'
import { commerce } from "../lib/commerce";
import { useEffect, useState } from "react";


const AllProducts = () => {
   // const [product, setProduct] = useState([])

   // const fetchProduct = async () => {
   //    try {
   //       const { data } = await commerce.products.list();
   //       setProduct(data)
   //       console.log(product)
   //    } catch (error) {
   //       console.log(error)
   //    }
        
   // }
   // useEffect(() => {
   //    fetchProduct()
   //    console.log(product)
   // }, [])

    return ( 
        <section id="products" className="sec-p sec-t w-100 d-flex justify-content-center align-items-center flex-column">
        <div className="products products w-100 d-flex justify-content-center align-items-center flex-wrap mt-3">
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo1}  id='1'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo2}  id='2'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo3}  id='3'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo4}  id='4'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo5}  id='5'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo6}  id='6'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo7}  id='7'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo8}  id='8'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo9}  id='9'/>
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo10} id='10' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo11} id='11' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo12} id='12' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo13} id='13' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo14} id='14' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo15} id='15' />
           <SinglePro price='6000' brand='adidas' type='Vintage Shirts' img={Logo16} id='16' />
        </div>
        </section>
     );
}
 
export default AllProducts;