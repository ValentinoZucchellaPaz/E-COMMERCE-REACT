import { createContext, useState } from "react";

export const CartContext = createContext()

export default function CartContextProvider ({children}) {

    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            productToAdd.stock -= productToAdd.quantity
            setCart(prev => [...prev, productToAdd])
        }
    }
    const isInCart = (id) => cart.some(item=>item.id===id)

    const addQuantity = (id, numberToAdd) => {
        const newQuantity = cart.find(item => item.id === id)
        newQuantity.stock -= numberToAdd
        newQuantity.quantity += numberToAdd
        setCart(cart.filter(item => item.id !== id))
        setCart(prev => [...prev, newQuantity])
    }
  
    const getTotalQuantity = () =>{
        let acc = 0
        cart.forEach(prod=>acc+=prod.quantity)
        return acc
    }

    const useContextById = (id) => {
        return cart.find(item=>item.id===id)
    }

    const totalQuantity = getTotalQuantity()

    console.log(cart);

    return  <CartContext.Provider value={{addToCart, isInCart, totalQuantity, cart, setCart, useContextById, addQuantity}}>
                {children}
            </CartContext.Provider>
}