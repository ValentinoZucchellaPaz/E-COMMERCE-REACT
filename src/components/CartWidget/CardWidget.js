import './CardWidget.css'
const CardWidget = ({children, color}) =>{
    const variant = color ? 'CardWidget CardWidget-white' : 'CardWidget';
    return (
        <button className={variant}>
            {children}
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    )
}
export default CardWidget