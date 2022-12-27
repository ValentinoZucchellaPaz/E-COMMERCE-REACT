import './ItemListContainer.css'

const ItemListContainer = ({ greeting, description }) => {
    return (
        <section className='ItemListContainer'>
            <h1>{greeting}</h1>
            <h4>{description}</h4>
        </section>
    )
}
export default ItemListContainer