import { useState, useEffect } from "react"
import { getProducts } from "../services/asyncMock"
import ItemList from "../components/ItemList/ItemList"
import Item from "../components/Item/Item"
import Spinner from "../components/ItemListContainer/assets/Spinner"
import { Container, Title, Subtitle } from "../services/StyledComponents"

const Productos = ({children}) => {
  
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
          <Container height='calc(100vh - 70px)'>
              <Spinner />
          </Container>
      )
  }
  if(error) {
      return (
          <Container height='calc(100vh - 70px)'>
              <Title primary={true}>404</Title>
              <Title>Hubo un error, intenta de nuevo mas tarde</Title>
          </Container>
      )
  }

  return (
    <Container>
        <Title primary={true}>Bienvenidos al mejor sitio de compras marciales!</Title>
        <ItemList>
                {
                    products.map(prod => {
                        return <Item key={prod.id} {...prod}>
                            <Subtitle>solo {prod.stock} en stock</Subtitle>
                            <Title>${prod.price}</Title>
                        </Item>
                    })
                }
        </ItemList>
        {children}
    </Container>
)
}

export default Productos