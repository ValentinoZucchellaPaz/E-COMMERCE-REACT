import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Box,
    ButtonGroup
  } from '@chakra-ui/react'

  import { DeleteIcon } from '@chakra-ui/icons'
import CartItem from "../CartItem/CartItem";

export default function Cart () {
    const {cart, setCart} = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    function getSubtotal() {
        let acc = 0
        cart.forEach(item=>acc+=(item.price*item.quantity))
        return acc
    }

    const handleDelete = (id) => {
        setCart(cart.filter(cartItem => cartItem.id !== id))
    }

    const handleClean = () => {
        setCart([])
        onClose()
    }

    const subtotal = getSubtotal()
     
    if (cart.length < 1) {
        return <div>
            <h2 className="text-xl uppercase m-5 font-semibold">carrito de compras</h2>
            <Text>Tu carrito de compras está vacio, dale un vistazo a nuestros <Link to='/'><Button variant={'link'} color={'#7A26C1'}>productos</Button></Link></Text>
            </div>
    }

    return (
        <div className="flex flex-col gap-2 m-5">
            <h2 className="text-xl uppercase m-5 font-semibold">carrito de compras</h2>
            {
                cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem} handleDelete={handleDelete}/>)
            }
            <h2 className="text-xl uppercase m-5 font-semibold">Total: ${subtotal}</h2>
            <Button w={'fit-content'} textTransform={'uppercase'} colorScheme={'blue'} m={'.5rem auto'}>
                agregar orden
            </Button>
            <Button onClick={onOpen} w={'fit-content'} textTransform={'uppercase'} colorScheme={'red'} m={'.5rem auto'}>
                limpiar
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>¿Quieres eliminar tu carrito de compras?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text> Si borras tu carrito no podrás recuperarlo, si quieres eliminar un item en particular borralos desde su boton de borrar: <DeleteIcon /></Text>
                </ModalBody>

                <ModalFooter>
                    <Button textTransform={'uppercase'} colorScheme='blue' mr={3} variant={'ghost'} onClick={onClose}>
                    Cerrar
                    </Button>
                    <Button textTransform={'uppercase'} colorScheme={'red'} variant={'ghost'} onClick={handleClean}>Eliminar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}