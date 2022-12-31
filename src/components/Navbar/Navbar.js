import NavbarLink from './NavbarLink'

const Navbar = () => {
    return (
        <nav className='flex flex-col md:flex-row justify-evenly items-center'>
            <NavbarLink>Productos</NavbarLink>
            <NavbarLink>Artes Marciales</NavbarLink>
            <NavbarLink>Nosotros</NavbarLink>
        </nav>
    )
}
export default Navbar