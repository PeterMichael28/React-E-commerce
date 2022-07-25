import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavLinks = ({btnToggle, active}) => {
    const totalQty = useSelector((state) => state.cart.totalQty)

    // const [act, setAct] = useState(false)

    // const handleClick = () => {

    // }

    return ( 
        <ul className={`nav-ul d-flex m-lg-0 p-lg-0 align-items-lg-center ${btnToggle ? 'change' : ''}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to='/aboutus'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to="/cart" className={`d-none d-lg-block ${active}`}>
                    <i className="bi bi-cart-check cart-icon">
                        <small className="d-flex align-items-center justify-content-center">{totalQty}</small>
                    </i>
                </Link>
            </li>
          </ul>
     );
}
 
export default NavLinks;
