import { useParams } from "react-router-dom"
import Spinner from "../../components/Spinner/Spinner"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import useAsync from "../../hooks/useAsync"
import { Heading, Stack } from "@chakra-ui/react"
import { getProductById } from "../../services/FireBase/products"
import useTitle from "../../hooks/useTitle"

const Detail = () => {

    const {productId} = useParams()
    const getProductByIdRef = () => getProductById(productId)
    const {data: product, loading, error} = useAsync(getProductByIdRef, [productId])

    const pageTitle = product ? `Fist&Kicks - ${product.name.toUpperCase()}` : 'Fist&Kicks - Product'
    useTitle(pageTitle, [product])
    
    return (
        <Stack justify='center' align='center' p='20px' minH='85vh'>
            {
                error 
                    ? <Heading>Hubo un error, intenta de nuevo mas tarde</Heading>
                    : loading 
                        ? <Spinner /> 
                        : <ItemDetail {...product}/>
            }
        </Stack>
    )
}

export default Detail