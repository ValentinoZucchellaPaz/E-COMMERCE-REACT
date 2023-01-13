import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
import './ItemDetail.css'

const ItemDetail = ({ name, img, stock, price, description, category, longDescription }) =>{
    return (
        <>
            <h2 className="Title-primary">Detalle del producto</h2>
            <div className="Detail-container">
                <img className="DetailImg" src={img} alt={name} title={description} />
                <div className="Content-container">
                    <h2 className="Title-primary">
                        {name} 
                    </h2>
                    <h2 className="Title">Categoría: {category}</h2>
                    <p className='Subtitle'>solo {stock} en stock</p>
                    <h2 className="Title-primary">${price}</h2>
                    <h2 className="Title">{longDescription}</h2>
                    <ItemCounter name={name} stock={stock}/>
                </div>
            </div>
            <Link className="return-link" to='../'>Volver</Link>
        </>
    )
}

export default ItemDetail