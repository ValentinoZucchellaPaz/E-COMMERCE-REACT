import { Button } from '@chakra-ui/react';
import './CardWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CardWidget = ({color, total}) =>{
    const variant = color ? 'white' : '';
    const {totalQuantity} = useContext(CartContext)
    const prodQuantity = total ? totalQuantity : ''
    return (
        <Button variant='outline' _active={{transform:'translateY(2px)'}} className={variant}
        colorScheme='purple'>
            {prodQuantity}
            <i className={`fa-solid fa-cart-shopping`}></i>
        </Button>
    )
}
export default CardWidget