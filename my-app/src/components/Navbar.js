import '../css/Navbar.css'
import Logo from '../assets/logo.png'
import { useState } from 'react';
import NavLinks from '../sm-components/NavLinks';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = ({ active }) => {

    const [btnToggle, setBtnToggle] = useState(false)
    const totalQty = useSelector((state) => state.cart.totalQty)

    const handleClick = () => {
        setBtnToggle(!btnToggle)
    }
    return ( 
        <header className="nav-container">
        <nav className="nav-bar d-flex align-items-center justify-content-between">
          <div className="nav-logo"><img src={Logo} alt="logo" /></div>
          <div className='icon-box'>
          <div className={`btn-container ${btnToggle ? 'change' : ''}`} onClick={handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        
          <NavLinks btnToggle={btnToggle} active={active}/>
          <Link to="/cart" className='d-lg-none'><i className="bi bi-cart-check cart-icon cart-icon2 "><small className="d-flex align-items-center justify-content-center">{totalQty}</small></i></Link>
          </div>
        </nav>
      </header>
     );
}
 
export default Navbar;