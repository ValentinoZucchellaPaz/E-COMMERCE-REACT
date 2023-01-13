import './ItemList.css'
const ItemList = ({ children }) => {
    return (
        <div className="Product-container">
            {children}
        </div>
    )
}
export default ItemList