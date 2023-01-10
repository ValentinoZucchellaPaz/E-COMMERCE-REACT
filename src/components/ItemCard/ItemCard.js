import '../../index.css'
import { CardImage, CardContainer, Title } from '../../services/StyledComponents'

const ItemCard = ({ name, img, children }) => {

    return (
        <CardContainer>
            <CardImage src={img} alt='product-img' />
            <Title capitalize={true}>
                {name} 
            </Title>
            {children}
           
        </CardContainer>
    )
}

export default ItemCard