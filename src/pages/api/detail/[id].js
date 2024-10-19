import { db } from '@/firebase/config'
import { getDoc, doc } from 'firebase/firestore'

export default async function (request, response) {
  const { query } = request
  const { id } = query
  console.log('desde api', id)

  const productRef = doc(db, 'products', id)
  getDoc(productRef)
    .then(prodSnapshot => {
      const data = prodSnapshot.data()
      const id = prodSnapshot.id

      data && response.json({
        ...data,
        id
      })

      return response.status(404).end()
    })
    .catch((e) => {
      console.log('error from api', e)
      response.status(404).end()
    })
}
