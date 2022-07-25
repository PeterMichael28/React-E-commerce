import React from 'react'
import { useSelector } from 'react-redux'

const CartCoupons = () => {

    const itemsList = useSelector((state) => state.cart.itemsList)
    let all = 0;

    itemsList.forEach(items => {
        all += Number(items.totalPrice)
    })
  return (


   <section id="coupons" className='sec-t sec-p w-100 d-flex align-items-start justify-content-center flex-wrap flex-xs-column'>
    <div className="coupons">
        <h5>Apply Coupons</h5>
        <form>
            <input type="tel" placeholder='Enter your coupon number' />
            <button>Apply</button>
        </form>
    </div>
    <div className="totals">
        <h5>Cart Totals</h5>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Cart total</td>
                        <td>{`# ${all}`}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td>{`# ${all}`}</td>
                    </tr>
                </tbody>
            </table>
            <button>Proceed to checkout</button>
        </div>
    </div>
   </section>
  )
}

export default CartCoupons