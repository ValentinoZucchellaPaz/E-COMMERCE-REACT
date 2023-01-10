import { getProducts } from '../../services/asyncMock'
import { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './../../index.css'
import { Container, Title, Subtitle } from '../../services/StyledComponents'
import Spinner from './assets/Spinner'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting, children }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect (()=>{
        getProducts()
            .then(productsFromAPI=>{
                setProducts(productsFromAPI)
            })
            .catch(error => setError(true))
            .finally(()=> setLoading(false))
    }, [])


    if(loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        )
    }
    if(error) {
        return (
            <Container>
                <Title>404</Title>
                <Title>Hubo un error, intenta de nuevo mas tarde</Title>
            </Container>
        )
    }
    
    return (
        <Container>
            <Title primary={true}>{greeting}</Title>
            <ItemList>
                    {
                        products.map(prod => {
                            return <ItemCard key={prod.id} {...prod}>
                                <Subtitle>solo {prod.stock} en stock</Subtitle>
                                <Title>${prod.price}</Title>
                            </ItemCard>
                        })
                    }
            </ItemList>
            {children /**counter display*/}
        </Container>
    )
}
export default ItemListContainer