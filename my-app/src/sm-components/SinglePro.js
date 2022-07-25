import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/counter/cartSlice";

const SinglePro = ({price, brand, type, img, id}) => {
    const itemsList = useSelector((state) => state.cart.itemsList)
    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(addToCart({
            type,
            price,
            img,
            id
        }))
        alert('Added to Cart, Check your cart for more info')
    }

    
    return ( 
        <div className="pro d-flex justify-content-center align-items-center flex-column">
        <img src={img} alt="img" />
        <div className="pro-text w-100 position-relative">
        <span>{brand}</span>
        <h5>{type}</h5>
        <div>
            <i className="bi bi-star-fill icons"></i>
            <i className="bi bi-star-fill icons"></i>
            <i className="bi bi-star-fill icons"></i>
            <i className="bi bi-star-fill icons"></i>
            <i className="bi bi-star-fill icons"></i>
            <i className="bi bi-star-fill icons"></i>
        </div>
        <h4>{`#${price}`}</h4>
        <div className="cart">
            <div onClick={addCart}><i className="bi bi-cart-check"></i></div>
        </div>
    </div>
</div>
     );
}
 
export default SinglePro;