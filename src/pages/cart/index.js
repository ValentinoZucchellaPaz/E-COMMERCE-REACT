import CartCard from '@/components/CartCard'
import { CartContext } from '@/context/CartContext'
import { styles } from '@/styles'
import { useContext } from 'react'

function Cart () {
  const { cart, cleanCart } = useContext(CartContext)
  console.log(cart)
  if (cart.length === 0) {
    return <h2 className={`${styles.h2} text-center`}>no hay productos en el carrito</h2>
  }
  return (
    <>
      {cart.map(prod => <CartCard key={prod.id} {...prod}/>)}
      <button onClick={cleanCart} className={`${styles.button} text-white bg-secondary hover:bg-red-700`}>clear cart</button>
    </>
  )
  // return cart.map(prod => <ProductCard key={prod.id} {...prod}/>)
}

export default Cart
