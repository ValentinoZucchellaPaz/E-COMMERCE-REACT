import CardWidget from "../CartWidget/CardWidget"
import './Navbar.css'
import { NavLink, useNavigate, Link } from "react-router-dom"
import logo from './assets/fistkicks-low-resolution-logo-color-on-transparent-background.png'
import { useCallback, useContext, useRef } from "react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
    Button
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {

    const header = useRef()
    const navigate = useNavigate()
    

    // navbar responsive 
    const toggleNav = useCallback(()=> header.current.classList.toggle('show-nav'), [header])


    return (
        <header ref={header} className="Header">
            <img onClick={()=>navigate('/')} className="Logo" src={logo} alt="logo" />
            <i className="fa-solid fa-bars" onClick={toggleNav}></i>
            <nav className="Nav">
                <NavLink className='NavbarLink' to='/'>Productos</NavLink>

                <Menu >
                    <MenuButton className='NavbarLink' bg='transparent' _hover={{bg:'transparent'}} _active={{bg:'transparent'}} as={Button} rightIcon={<ChevronDownIcon />}>
                        Categorías
                    </MenuButton>
                    <MenuList bg={'#282c34'} border={'1px solid #4d515a'} boxShadow={'lg'}>
                        <MenuItem bg={'#282c34'} color={'white'} _hover={{ bg: '#4d515a' }}><NavLink className='w-full text-center uppercase font-semibold' to='/category/ropa'>Ropa</NavLink></MenuItem>
                        <MenuItem bg={'#282c34'} color={'white'} _hover={{ bg: '#4d515a' }}><NavLink className='w-full text-center uppercase font-semibold' to='/category/guantes'>Guantes</NavLink></MenuItem>
                        <MenuItem bg={'#282c34'} color={'white'} _hover={{ bg: '#4d515a' }}><NavLink className='w-full text-center uppercase font-semibold' to='/category/combate'>Combate</NavLink></MenuItem>
                    </MenuList>
                </Menu>

                <NavLink className='NavbarLink' to='/cart'>Carrito</NavLink>
            </nav>
            <Link to='/cart'>
                <CardWidget color='white' total={true}/>
            </Link>
        </header>
    )
}
export default Navbar