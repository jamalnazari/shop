import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 
import { useContext } from "react"
import { shopcontext } from "../context/shopcontext"
import './nav.css'
const Navbar =()=>{
  const {cartitem}=useContext(shopcontext)
  const itemcount=cartitem?.reduce((prev , current)=>{
    return prev + current.count
  }, 0)
  return (
    <div className="navbar navbar-dark  navbar-expand-lg">
      <div className="container"></div>
      <a className="navbar-brand"> Jamal nazari</a>
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Link to='/cart' className="nav-link">
             <FontAwesomeIcon icon={faShoppingCart}/>
             {itemcount > 0 && <span className="cart-items-count">{itemcount}</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link">shop</Link>
        </li>
      </ul>
    </div>
  )
 }
export default Navbar 


  