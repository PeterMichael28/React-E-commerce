import React from 'react'
import Footer from '../components/Footer'
import GenBanner from '../components/GenBanner'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import CartCoupons from '../sm-components/CartCoupons'
import CartTable from '../sm-components/CartTable'

const Cart = () => {
  return (
    <div id='cartJs'>
    <Navbar />
   <main>
    <GenBanner one="#Cart" two='Add your coupon code & SAVE up to 70%' clas='about-banner' />
    <CartTable />
    <CartCoupons />
    <NewsLetter />
   </main>
   <Footer />
</div>
  )
}

export default Cart