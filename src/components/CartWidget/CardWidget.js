import { Button } from "../../services/StyledComponents"
const CardWidget = ({children, border, textColor}) =>{

    return (
        <Button border={border} textColor={textColor}>
            {children}
            <i className="fa-solid fa-cart-shopping"></i>
        </Button>
    )
}
export default CardWidget