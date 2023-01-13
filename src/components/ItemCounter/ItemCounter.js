import { useState } from "react"
import Swal from 'sweetalert2'
import CardWidget from "../CartWidget/CardWidget"
import './ItemCounter.css'

const ItemCounter = ({ name, stock }) => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        counter < stock && setCounter(counter+1)
    }
    const decrement = () =>{
        counter > 0 && setCounter(counter-1)
    }

    const handleOnAdd = () => {
        if(counter >= 1) {
            Swal.fire({
                title: `${name.toUpperCase()} agregado al carrito (x${counter})`,
                toast:true,
                position: 'top-end',
                timer: 2000,
                timerProgressBar: true,
                confirmButtonColor: '#7A26C1'
            })
        }
        setCounter(0)
    }

    return (
        <div className="Counter-container">
            <div className="CounterContent-container">
                <button className="decrement" onClick={decrement}>-</button>
                <span>{counter}</span>
                <button className="increment" onClick={increment}>+</button>
            </div>
            <p onClick={()=>handleOnAdd()}><CardWidget></CardWidget></p>
        </div>
    )
}

export default ItemCounter