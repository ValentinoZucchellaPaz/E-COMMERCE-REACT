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
        <div className='ItemCounter-container'>
            <h2>{productName} <p className='stock-display'>solo {stock} en stock</p></h2>
            <div className='counter-container'>
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
            <button className='on-add' onClick={() => handleOnAdd()}>Agregar <i className="fa-solid fa-cart-shopping"></i></button>
        </div>

    )
}

export default ItemCounter