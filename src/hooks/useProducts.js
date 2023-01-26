import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../services/FireBase/FirebaseConfig"

export default function useProducts (categoryId) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        


        getDocs(collectionRef)
            .then(res=>{
                console.log(res)
                const productsAdapted = res.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                console.log(productsAdapted)
                setProducts(productsAdapted)
            })
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false))
    }, [categoryId])

    // useEffect (()=>{
    //     setLoading(true)
    //     asynFunction(functionParams)
    //         .then(productsFromAPI=> setProducts(productsFromAPI))
    //         .catch(err => setError(true))
    //         .finally(()=> setLoading(false))
    // }, [asynFunction, functionParams])


    return {products, loading, error}
}