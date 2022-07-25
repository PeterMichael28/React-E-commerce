import React from 'react'
import '../css/Cart.css'
import Logo2 from '../assets/products/f1.jpg'
import Logo3 from '../assets/products/f2.jpg'
import CartRows from './CartRows'
import { useSelector } from 'react-redux'

const CartTable = () => {
  const itemsList = useSelector((state) => state.cart.itemsList)


  return (
    <div id='table'>
    <table className="tabl sec-t">
    <thead>
      <tr className='my-2'>
        <th className=''>REMOVE</th>
        <th>IMAGE</th>
        <th>PRODUCT</th>
        <th>PRICE</th>
        <th>QUANTITY</th>
        <th>SUBTOTAL</th>
      </tr>
    </thead>
    <tbody>
      {
        itemsList.map((item) => {
         return <CartRows key={item.id} id={item.id} Logo2={item.img}  type={item.type} quantity={item.quantity} totalPrice={item.totalPrice} price={item.price}/>
        })
      }
     {/* <CartRows Logo2={Logo2} />
     <CartRows Logo2={Logo2} /> */}
    </tbody>
  </table>
    </div>
  )
}

export default CartTable