import './ItemListContainer.css'

const ItemListContainer = ({ greeting, description, children }) => {
    return (
        <section className='ItemListContainer'>
            <h1>{greeting}</h1>
            <h4>{description}</h4>
            {children}
        </section>
    )
}
export default ItemListContainer