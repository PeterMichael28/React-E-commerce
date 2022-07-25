import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, subtotalPrice } from '../features/counter/cartSlice'

const CartRows = ({Logo2, type, quantity, totalPrice, price, id}) => {

  const [qty, setQty] = useState(quantity)
  const itemsList = useSelector((state) => state.cart.itemsList)
  const dispatch = useDispatch()


  
  const handleChange = (e) => {
    if (e.target.value < 1) e.target.value = 1
    setQty(Number(e.target.value))
  }

  useEffect(() => {
    dispatch(subtotalPrice({
      id,
      qty
    }))
  }, [qty])

  const handleClick = () => {
    dispatch(removeCart(id))
    // console.log(removeCart(id))
  }

  // console.log(itemsList)
  return (
    <tr>
        <td className='td-inputs d-flex justify-content-center align-items-center'><i onClick={handleClick} className='bi bi-x-circle delete-icon'></i></td>
        <td className=' td-img'><img src={Logo2} className='' alt="" /></td>
        <td>{type}</td>
        <td>{price}</td>
        <td className='td-inputs d-flex justify-content-center align-items-center'><input type="number" value={qty} onChange={handleChange} className='d-flex justify-content-center align-items-center' /></td>
        <td>{totalPrice}</td>
      </tr>
  )
}

export default CartRows