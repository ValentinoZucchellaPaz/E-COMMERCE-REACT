import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {productId} = useParams()
    
    
    useEffect(()=>{
        getProductsById(productId)
        .then(productFromAPI=>{
            setProduct(productFromAPI)
        })
        .catch(error => setError(true))
        .finally(()=> setLoading(false))
    }, [productId])

    if(loading) {
        return (
            <div className="Container">
                <Spinner />
            </div>
        )
    }
    if(error) {
        return (
            <div className="Container">
                <h2 className="Title-primary">404</h2>
                <h2 className="Title">Hubo un error, intenta de nuevo mas tarde</h2>
            </div>
        )
    }

    return (
        <div className="Container">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer