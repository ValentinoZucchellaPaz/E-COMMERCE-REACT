import { Button } from '@chakra-ui/react';
import './CardWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CardWidget = ({color, total}) =>{
    const variant = color ? 'white' : '';
    const {itemsQuantity} = useContext(CartContext)
    return (
        <Button variant='outline' _active={{transform:'translateY(2px)'}} className={variant}
        colorScheme='purple'>
            {total ? itemsQuantity : ''}
            <i className={`fa-solid fa-cart-shopping`}></i>
        </Button>
    )
}
export default CardWidget