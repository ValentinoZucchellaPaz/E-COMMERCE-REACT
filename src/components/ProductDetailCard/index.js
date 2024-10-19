import { styles } from '@/styles'
import Counter from '../Counter'
import { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import Link from 'next/link'
import Cart from '@/icons/Cart'

function ProductDetailCard ({ id, img, name, description, price, stock, category }) {
  const { addToCart } = useContext(CartContext)
  const [qAdded, setQAdded] = useState(0)
  function handleAddToCart (quantity) {
    if (quantity > 0) {
      addToCart({ id, img, name, description, price, stock, category, quantity })
      setQAdded(quantity)
    }
  }
  return (
    <section className='flex flex-row w-full md:w-[50vw] h-52 my-5 gap-10 rounded-sm bg-white shadow-lg'>
      <p>product</p>
        <img className="rounded-sm w-52 h-52" src={img} alt={name} title={name} />
        <div className="flex flex-col mt-2">
            <h2 className={styles.h2}>{name}</h2>
            <strong>${price}</strong>
            <p>{description}</p>
            <small>stock: {stock} <br /> category: {category}</small>
            {
              qAdded > 0
                ? <p className=' text-green-700'>Se agregaron {qAdded} al <Link className='hover:underline' href='/cart'>carrito</Link></p>
                : <Counter max={stock} onSubmit={handleAddToCart} icon={<Cart />}/>
            }
        </div>
    </section>
  )
}

export default ProductDetailCard
