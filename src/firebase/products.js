import { db } from './config'
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore'

function mapProdSnapshotToProdArray (snapshot) {
  return snapshot.docs.map(doc => {
    const data = doc.data()
    return { id: doc.id, ...data }
  })
}

export function getProductsFromFirestore (categoryId) {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

    getDocs(collectionRef)
      .then(snapshot => {
        const productsAdapted = mapProdSnapshotToProdArray(snapshot)
        resolve(productsAdapted)
      })
      .catch(err => reject(err))
  })
}

export function UploadNewProduct ({ name, description, price, stock, img, category }) {
  addDoc(collection(db, 'products'), { name, description, price, stock, img, category }).then(alert('subido'))
}
