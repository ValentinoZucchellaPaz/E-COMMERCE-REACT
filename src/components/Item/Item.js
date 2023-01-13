import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ name, img, stock, price, description, id }) => {

    return (
        <div className='Card-container'>
            <Link className='CardImage-container' to={`/item/${id}`}>
                <img className='CardImage' src={img} alt={name} title={description} />
            </Link>
            <div className='CardContent-container'>
                <Link to={`/item/${id}`}>
                    <h2 className='Title-capitalize'>
                        {name} 
                    </h2>
                </Link>
                <p className='Subtitle'>solo {stock} en stock</p>
                <Link to={`/item/${id}`}>
                    <h2 className='Title-primary' >${price}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Item