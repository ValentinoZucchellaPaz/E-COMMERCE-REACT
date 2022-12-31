import { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ productName, stock, onAdd }) => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        counter < stock && setCounter(counter+1)
    }
    const decrement = () =>{
        counter > 0 && setCounter(counter-1)
    }
    const handleOnAdd = () => {
        counter >= 1 && onAdd(counter)
    }

    return (
        <div className='ItemCounter-container '>
            <h2 className=''>{productName} <p className='m-0 text-xs text-gray-800 italic'>solo {stock} en stock</p></h2>
            <div className=' border-solid border-[1px] rounded-lg border-black border-opacity-40 mx-0 my-1 flex justify-between items-center p-1'>
                <button className='transparent border-none text-xl transition-all hover:font-semibold' onClick={decrement}>-</button>
                <span>{counter}</span>
                <button className='transparent border-none text-xl transition-all hover:font-semibold' onClick={increment}>+</button>
            </div>
            <button className='my-1 mx-0 border-none rounded-lg bg-transparent uppercase cursor-pointer transition-all hover:bg-[#7A26C1] active:translate-y-[2px]' onClick={() => handleOnAdd()}>Agregar <i className="fa-solid fa-cart-shopping"></i></button>
        </div>

    )
}

export default ItemCounter