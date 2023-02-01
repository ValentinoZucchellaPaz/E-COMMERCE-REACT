import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Spinner from '../../components/Spinner/Spinner'
import useAsync from '../../hooks/useAsync'
import { Heading, Stack } from '@chakra-ui/react'
import { getProducts } from '../../services/FireBase/products'
import useTitle from '../../hooks/useTitle'


const Products = ({  children }) => {
    

    const {categoryId} = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const {data: products, loading, error} = useAsync(getProductsWithCategory, [categoryId])
    
    const pageTitle = categoryId ? `Fist&Kicks - ${categoryId.toUpperCase()}` : 'Fist&Kicks - Productos'
    useTitle(pageTitle, [categoryId])

    return (
        <Stack p='20px' align='center' justify='center' minH='85vh'>
            {
                error 
                    ? <Heading>Hubo un error, intenta de nuevo mas tarde</Heading>
                    : loading 
                        ? <Spinner />
                        : <>
                            <Heading textTransform='uppercase'>
                                {
                                    categoryId ? categoryId : 'Nuestros Productos'
                                }
                            </Heading>
                            <ItemList products={products} />
                        </>
            }
            {children}
        </Stack>
    )
}
export default Products