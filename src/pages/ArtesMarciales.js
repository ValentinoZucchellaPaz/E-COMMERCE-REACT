import { useEffect, useState } from "react";
import { Container, Title, Subtitle } from "../services/StyledComponents";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import ItemList from "../components/ItemList/ItemList";
import Spinner from "../components/ItemListContainer/assets/Spinner";
import { getMartialArts } from "../services/asyncMock";


const ArtesMarciales = () => {

  const [martialArts, setMartialArts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect (()=>{
    getMartialArts()
        .then(martialArtsFromAPI=>{
            setMartialArts(martialArtsFromAPI)
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
      <Title primary={true}>Practicamos y vendemos articulos de estas artes marciales:</Title>
      <ItemList>
        {
          martialArts.map(martialArt=> {
            return <ItemCard key={martialArt.id} img={martialArt.img} name={martialArt.name}>
              <Subtitle>{martialArt.description}</Subtitle>
            </ItemCard>
          })
        }
      </ItemList>
      <Link to='/'><Title primary={true}>Mira nuestros productos con un click aquí</Title></Link>
    </Container>
  )
}

export default ArtesMarciales