import { ProductsContainer } from "../../services/StyledComponents"

const ItemList = ({ children }) => {
    return (
        <ProductsContainer>
            {children}
        </ProductsContainer>
    )
}
export default ItemList