import cardLogo from '../../cart-shopping-solid.svg'
import './CardWidget.css'
const CardWidget = () =>{
    return (
        <div className='CardWidget-container'>
            <span className='hardcoded-value'>0</span>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
    )
}
export default CardWidget