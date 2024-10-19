import { useRouter } from 'next/router'
import { styles } from '@/styles'
import { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import TrashBin from '@/icons/TrashBin'
import Edit from '@/icons/Edit'
import Counter from '../Counter'
import Check from '@/icons/Check'
import Cross from '@/icons/Cross'

export default function CartCard ({ id, name, description, price, img, quantity, stock }) {
  const { deleteItem, editItemQuantity } = useContext(CartContext)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [stateQ, setStateQ] = useState(quantity)
  const router = useRouter()

  function handleEditItemQ (quantity) {
    editItemQuantity(id, quantity)
    setToggleEdit(false)
    setStateQ(quantity)
  }

  return (
      <div className='grid grid-cols-2 w-full md:w-[50vw] h-52 overflow-y-auto overflow-x-hidden my-5 gap-10 rounded-sm bg-white shadow-lg'>
        <img className="rounded-sm w-52 h-52" src={img} alt={name} title={name} />
        <div className="flex flex-col mt-2 ml-5 gap-2 relative w-full">
            <h2 onClick={() => router.push(`/products/${id}`)} className={`${styles.h2} cursor-pointer`}>{name}</h2>
            <strong>${price}</strong>
            <p>{description}</p>
            <small>{stock}</small>
            {
              toggleEdit
                ? (
                  <Counter initialCount={stateQ} max={stock} onSubmit={handleEditItemQ} icon={<Check />}>
                    <button onClick={() => setToggleEdit(false)} className='font-medium transition-all cursor-pointer hover:bg-red-700 hover:text-white rounded-xl flex justify-center items-center p-2'><Cross /></button>
                  </Counter>
                  )
                : (
                  <strong>
                    On cart: {stateQ}
                    <button onClick={() => setToggleEdit(true)} className={`${styles.button} bg-secondary text-white hover:bg-primary`}><Edit /></button>
                  </strong>
                  )
            }
            <div className='flex flex-row gap-2 '>
                <button onClick={() => router.push(`/products/${id}`)} className={`${styles.purpleButton} text-white bg-secondary`}>See product</button>
                <button onClick={() => deleteItem(id)} className={`${styles.button} text-white hover:bg-red-700 bg-secondary`}><TrashBin className='mx-auto' /></button>
            </div>
        </div>
      </div>
  )
}
