import ProductDetailCard from '@/components/ProductDetailCard'
import { useEffect } from 'react'

export default function ProductDetail (props) {
  const { product, error } = props
  useEffect(() => {}, [error])
  if (error) {
    return <p>{error}</p>
  }
  console.log(props)
  // const { img, name, description, price, stock, category } = product
  return (
    <ProductDetailCard {...product}/>
  )
}

export async function getServerSideProps (context) {
  const { params } = context
  const { productId: id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/detail/${id}`)
  if (apiResponse.ok) {
    const product = await apiResponse.json()
    return { props: { product, error: null } }
  } else {
    const error = 'No se ha podido encontrar este producto, por favor prueba más tarde.'
    return { props: { product: null, error } }
  }
}
