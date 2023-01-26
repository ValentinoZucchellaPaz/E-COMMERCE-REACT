import { getProductsById } from "../../services/asyncMock"
import { useParams } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"
import useProducts from "../../hooks/useProducts"

const ItemDetailContainer = () => {

    const {productId} = useParams()
    const {products: product, loading, error} = useProducts(getProductsById, productId)
    console.log(product);

    return (
        <div className="Container">
            {
                error 
                    ? <h2 className="Title">Hubo un error, intenta de nuevo mas tarde</h2>
                    : loading 
                        ? <Spinner /> 
                        : <ItemDetail {...product} id={product.id}/>
            }
        </div>
    )
}

export default ItemDetailContainer