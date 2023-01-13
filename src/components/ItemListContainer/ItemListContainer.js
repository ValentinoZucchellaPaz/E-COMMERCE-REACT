import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import './../../index.css'
import './ItemListContainer.css'

const ItemListContainer = ({  children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {categoryId} = useParams()


    const asynFunction = categoryId ? getProductsByCategory : getProducts;

    useEffect (()=>{
        setLoading(true)
        asynFunction(categoryId)
            .then(productsFromAPI=> setProducts(productsFromAPI))
            .catch(error => setError(true))
            .finally(()=> setLoading(false))
    }, [categoryId])

    if(loading) {
        return (
            <div className='Container'>
                <Spinner />
            </div>
        )
    }
    if(error) {
        return (
            <div className='Container'>
                <h2 className='Title-primary'>404</h2>
                <h2 className='Title'>Hubo un error, intenta de nuevo mas tarde</h2>
            </div>
        )
    }
  

  return (
    <div className='Container'>
        <h2 className='Title-primary'>Nuestros Productos</h2>
        <ItemList>
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod} />
                })
            }
        </ItemList>
        {children}
    </div>
  )
}
export default ItemListContainer