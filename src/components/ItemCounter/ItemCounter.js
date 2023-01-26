import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CardWidget from "../CartWidget/CardWidget"
import '../ItemCounter/ItemCounter.css'
import { useToast } from "@chakra-ui/react"
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
    const {addToCart, isInCart, addQuantity} = useContext(CartContext)

    const increment = (e) =>{
        e.preventDefault()
        counter < stock && setCounter(counter+1)
    }
    const decrement = (e) =>{
        e.preventDefault()
        counter > 0 && setCounter(counter-1)
    }

    const handleOnAdd = () => {
        // ? console.log(`${name} agregado al carrito (${counter})`) : console.log(`${name} ya esta agregado al carrito`);
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
    const handleInput = (value) => {
        setCounter(value)
    }

    return (
        <div className="Counter-container">
            {/* <div className="CounterContent-container">
                <button className="decrement" onClick={decrement}>-</button>
                <span>{counter}</span>
                <button className="increment" onClick={increment}>+</button>
            </div> */}
            <NumberInput  defaultValue={counter} value={counter} min={0} max={stock} w={'80px'}>
                <NumberInputField value={counter}/>
                <NumberInputStepper>
                    <NumberIncrementStepper onClick={increment}/>
                    <NumberDecrementStepper onClick={decrement} />
                </NumberInputStepper>
            </NumberInput>
            <p onClick={handleOnAdd}><CardWidget></CardWidget></p>
        </div>
    )
}

export default ItemCounter