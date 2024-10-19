import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
      console.log('añadido al carrito')
      return { status: true, message: 'added to cart' }
    } else {
      return { status: false, message: 'is already in cart' }
    }
  }

  const isInCart = (id) => cart.some(item => item.id === id)

  function editItemQuantity (id, newQuantity) {
    const product = getItemById(id)
    console.log(product, newQuantity)
    product.quantity = newQuantity
    console.log('changes prod: ', product)
    addToCart({ ...product })
  }

  //   const getItemsQuantity = () => {
  //     let acc = 0
  //     cart.forEach(prod => acc += prod.quantity)
  //     return acc
  //   }

  const getItemById = (id) => {
    return cart.find(item => item.id === id)
  }

  //   const getTotal = () => {
  //     let total = 0
  //     cart.forEach(item => total += (item.price * item.quantity))
  //     return total
  //   }

  const deleteItem = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id))
  }
  const cleanCart = () => {
    setCart([])
  }

  //   const total = getTotal()

  //   const itemsQuantity = getItemsQuantity()

  console.log(cart)

  //   return <CartContext.Provider value={{ addToCart, isInCart, itemsQuantity, cart, getItemById, total, deleteItem, cleanCart }}>
  return <CartContext.Provider value={{ addToCart, isInCart, cart, cleanCart, deleteItem, editItemQuantity }}>
                {children}
            </CartContext.Provider>
}
