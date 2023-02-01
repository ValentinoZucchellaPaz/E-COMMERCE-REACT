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
    Heading,
    ButtonGroup, Stack
  } from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import CartItem from "../../components/CartItem/CartItem";
import useTitle from "../../hooks/useTitle";

export default function Cart () {
    const {cart, total, cleanCart} = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useTitle('Fist&Kicks - Carrito')

    const handleClean = () => {
        cleanCart()
        onClose()
    }
     
    if (cart.length < 1) {
        return <Stack gap='15px' p='20px' align='center'>
            <Heading textTransform='uppercase'>carrito de compras</Heading>
            <Text>Tu carrito de compras está vacio, dale un vistazo a nuestros <Link to='/'><Button variant={'link'} color={'#7A26C1'}>productos</Button></Link></Text>
            </Stack>
    }

    return (
        <Stack gap='15px' p='20px' align='center'>
            <Heading textTransform='uppercase'>carrito de compras</Heading>
            {
                cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)
            }
            <Heading fontSize='1.5rem' textTransform='uppercase'>Total: ${total}</Heading>
            <ButtonGroup m='1rem auto'>
                <Link to='/checkout'>
                    <Button textTransform={'uppercase'} colorScheme={'blue'} >
                        agregar orden
                    </Button>
                </Link>
                <Button onClick={onOpen} textTransform={'uppercase'} colorScheme={'red'} >
                    limpiar
                </Button>
            </ButtonGroup>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>¿Quieres eliminar tu carrito de compras?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text> Si borras tu carrito no podrás recuperarlo, si quieres eliminar un item en particular borralos desde su boton de borrar: <DeleteIcon /></Text>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup>
                            <Button textTransform={'uppercase'} colorScheme='blue' variant={'ghost'} onClick={onClose}>
                            Cancelar
                            </Button>
                            <Button textTransform={'uppercase'} colorScheme={'red'} variant={'ghost'} onClick={handleClean}>Eliminar</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}