import { getProducts, getProductsByCategory } from '../../services/asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import './../../index.css'
import './ItemListContainer.css'
import useProducts from '../../hooks/useProducts'

const ItemListContainer = ({  children }) => {

    const {categoryId} = useParams()
    // const asynFunction = categoryId ? getProductsByCategory : getProducts;

    // const {products, loading, error} = useProducts(asynFunction, categoryId)  
    const { products, loading, error } = useProducts(categoryId)

    return (
        <div className='Container'>
            {
                error 
                    ? <h2 className="Title">Hubo un error, intenta de nuevo mas tarde</h2>
                    : loading 
                        ? <Spinner /> 
                        : <><h2 className='Title-primary'>Nuestros Productos</h2>
                            <ItemList products={products} /></>
            }
            {children}
        </div>
    )
}
export default ItemListContainer