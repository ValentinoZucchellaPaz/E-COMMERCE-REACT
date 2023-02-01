import './MartialArtsList.css'
import MartialArtsCard from '../MartialArtsCard/MartialArtsCard'
import React from 'react'


const MartialArtsList = ({ martialArts }) => {
    return (
        <div className="MartialArts-container">
            {
                martialArts.map(prod => {
                    return <MartialArtsCard key={prod.id} {...prod} />
                })
            }
        </div>
    )
}
export default React.memo(MartialArtsList)