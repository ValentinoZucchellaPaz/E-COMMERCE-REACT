import CardWidget from "../CartWidget/CardWidget"
import './Navbar.css'
import { NavLink, useNavigate } from "react-router-dom"
import logo from './assets/fistkicks-low-resolution-logo-color-on-transparent-background.png'

const Navbar = () => {

    const navigate = useNavigate()

    // navbar responsive 
    const toggleNav = () =>{
        document.querySelector('header').classList.toggle('show-nav')
    }


    return (
        <header className="Header">
            {/* <Link to='/'></Link> */}
            <img onClick={()=>navigate('/')} className="Logo" src={logo} alt="logo" />
            <i className="fa-solid fa-bars" onClick={toggleNav}></i>
            <nav className="Nav">
                <NavLink className='NavbarLink' to='/'>All</NavLink>
                <NavLink className='NavbarLink' to='/category/ropa'>Ropa</NavLink>
                <NavLink className='NavbarLink' to='/category/guantes'>Guantes</NavLink>
                <NavLink className='NavbarLink' to='/category/combate'>Combate</NavLink>
            </nav>
            <CardWidget color='white'>0</CardWidget>
        </header>
    )
}
export default Navbar