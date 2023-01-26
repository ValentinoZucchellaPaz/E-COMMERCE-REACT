import './ItemList.css'
import Item from '../Item/Item'
import React from 'react'


const ItemList = ({ products }) => {
    return (
        <div className="Product-container">
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod} />
                })
            }
        </div>
    )
}
export default React.memo(ItemList)