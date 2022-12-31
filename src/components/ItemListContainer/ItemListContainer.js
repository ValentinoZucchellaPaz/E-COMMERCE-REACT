const ItemListContainer = ({ greeting, description, children }) => {
    return (
        <section className='h-screen w-screen bg-gray-400 grid place-content-center gap-4'>
            <h1 className='m-0 uppercase font-bold text-2xl'>{greeting}</h1>
            <h4 className='m-0 uppercase font-semibold'>{description}</h4>
            {children}
        </section>
    )
}
export default ItemListContainer