import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/FireBase/FirebaseConfig'

export function getProducts (categoryId) {
    return new Promise ((resolve, reject)=>{
        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category', '==', categoryId))
                : collection(db, 'products')
            
        getDocs(collectionRef)
            .then(res=>{
                const productsAdapted = res.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                resolve(productsAdapted)
            })
            .catch( err=> reject(err) )
    })
}

export function getProductById (itemId) {
    return new Promise ((resolve, reject)=>{
        const docRef = doc(db, 'products', itemId)
        getDoc(docRef)
            .then(res => {
                const productAdapted = { id: res.id, ...res.data() }
                resolve(productAdapted)
            })
            .catch(err => reject(err))
    })
}