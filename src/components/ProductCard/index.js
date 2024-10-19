import { styles } from '@/styles'
import { useRouter } from 'next/router'

export default function ProductCard ({ id, name, description, price, img }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/products/${id}`)} className='flex flex-row w-full md:w-[50vw] h-52 my-5 gap-10 rounded-sm bg-white shadow-lg'>
        <img className="rounded-sm w-52 h-52" src={img} alt={name} title={name} />
        <div className="flex flex-col mt-2">
            <h2 className={styles.h2}>{name}</h2>
            <strong>${price}</strong>
            <p>{description}</p>
        </div>
    </div>
  )
}
