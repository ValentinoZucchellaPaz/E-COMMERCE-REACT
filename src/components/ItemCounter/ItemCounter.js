import { useState } from "react"
import Swal from 'sweetalert2'
import { Container, Title } from "../../services/StyledComponents"
import CardWidget from "../CartWidget/CardWidget"

const ItemCounter = () => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () =>{
        counter > 0 && setCounter(counter-1)
    }

    const handleOnAdd = () => {
        if(counter >= 1) {
            Swal.fire({
                title: `agregado al carrito (x${counter})`,
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
        <Container width='12rem' height='auto' flexDirection='row' border='1px solid rgba(0,0,0,0.4)' padding='10px'>
            <Container width='40%' height='auto' flexDirection='row' border='1px solid rgba(0,0,0,0.4)' padding='4px'>
                <Title cursor={true} onClick={decrement}>-</Title>
                <span>{counter}</span>
                <Title cursor={true} onClick={increment}>+</Title>
            </Container>
            <p onClick={()=>handleOnAdd()}><CardWidget border={false} textColor={'black'}></CardWidget></p>
        </Container>
    )
}

export default ItemCounter