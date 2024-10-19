import { getProductsFromFirestore } from '@/firebase/products'
import ProductCard from '@/components/ProductCard'
import useProducts from '@/hooks/useProducts'
import Spinner from '@/components/Spinner'
import { styles } from '@/styles'

function Products () {
  const { data: products, loading, error } = useProducts(getProductsFromFirestore, [])

  return (

    <div className='w-full md:w-[50vw]'>
      <h2 className={styles.h2}>Products</h2>
      {loading && <div className='text-center'><Spinner /></div>}
      {(error && !products) && <p>Error: {error.message}</p>}
      {
        (products && products.length > 0) && (
          products.map(prod => <ProductCard key={prod.id} {...prod}/>)
        )
      }
    </div>
  )
}

export default Products
