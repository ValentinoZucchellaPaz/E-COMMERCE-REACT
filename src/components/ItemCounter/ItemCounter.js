import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CardWidget from "../CartWidget/CardWidget"
import { Center, useToast } from "@chakra-ui/react"
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

const ItemCounter = ({ name, stock, id, price, img }) => {

    const toast = useToast()

    const [counter, setCounter] = useState(0)
    const {addToCart, isInCart} = useContext(CartContext)

    const increment = (e) =>{
        e.preventDefault()
        counter < stock && setCounter(counter+1)
    }
    const decrement = (e) =>{
        e.preventDefault()
        counter > 0 && setCounter(counter-1)
    }

    const handleOnAdd = () => {
        if (counter > 0 ) {
            !isInCart(id) 
            ? toast({
                title: "Agregado al carrito",
                description: `Se han agregado ${counter} ${name.toUpperCase()}`,
                status: 'success',
                position: 'top',
                duration: 2000,
                isClosable: true,
            })
            : toast({
                title: "Ya está en el carrito",
                description: `${name.toUpperCase()} ya está en el carrito`,
                status: 'error',
                position: 'top',
                duration: 2000,
                isClosable: true,
            })


            addToCart({name, quantity: counter, id, price, img, stock})
            setCounter(0)
        }
    }

    return (
        <Center gap='5px' p='10px' >
            <NumberInput  defaultValue={counter} value={counter} min={0} max={stock} w={'80px'}>
                <NumberInputField value={counter}/>
                <NumberInputStepper>
                    <NumberIncrementStepper onClick={increment}/>
                    <NumberDecrementStepper onClick={decrement} />
                </NumberInputStepper>
            </NumberInput>
            <p onClick={handleOnAdd}><CardWidget></CardWidget></p>
        </Center>
    )
}

export default ItemCounter