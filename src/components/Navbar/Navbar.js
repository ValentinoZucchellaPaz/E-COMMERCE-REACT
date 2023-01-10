import CardWidget from "../CartWidget/CardWidget"
import './../../index.css'
import { Header, Logo, Nav, NavbarLink } from "../../services/StyledComponents"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    // navbar responsive 
    const toggleNav = () =>{
        document.querySelector('header').classList.toggle('show-nav')
    }


    return (
        <Header >
            <Logo src='./images/fistkicks-low-resolution-logo-color-on-transparent-background.png' alt="logo" />
            <i className="fa-solid fa-bars" onClick={toggleNav}></i>
            <Nav>
                <NavLink to='/'><NavbarLink>Productos</NavbarLink></NavLink>
                <NavLink to='/artes-marciales'><NavbarLink>Artes Marciales</NavbarLink></NavLink>
                <NavLink to='/nosotros'><NavbarLink>Nosotros</NavbarLink></NavLink>
            </Nav>
            <CardWidget border={true} textColor={'white'}>0</CardWidget>
        </Header>
    )
}
export default Navbar