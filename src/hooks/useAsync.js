import { useState, useEffect } from "react"

export default function useProducts (asyncFunction, dependencies = []) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    if (!Array.isArray(dependencies)){
        console.error('No se paso un array como dependencia en useAsync');
        dependencies = []
    }

    useEffect(()=>{
        !loading && setLoading(true)

        asyncFunction()
            .then ( data => setData(data) )
            .catch( err => setError(true) )
            .finally( ()=> setLoading(false) )
    }, dependencies) //eslint-disable-line

    return {data, loading, error}
}