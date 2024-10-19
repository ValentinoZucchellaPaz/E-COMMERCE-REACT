import { useState } from 'react'
import { UploadNewProduct } from '@/firebase/products'
import { styles } from '@/styles'

export default function UploadNewProductForm () {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [imgURL, setImgURL] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    UploadNewProduct({ name, price: parseInt(price, 10), stock: parseInt(stock, 10), category, description, img: imgURL })
    setName('')
    setCategory('')
    setDescription('')
    setImgURL('')
    setPrice('')
    setStock('')
  }
  return (
      <form className='p-5 md:p-10 mx-auto rounded-lg shadow-lg bg-secondary text-white flex flex-col gap-6 justify-center items-center w-auto lg:w-1/2' onSubmit={handleSubmit}>
        <h2 className={`${styles.h2} text-center`}>Sube un producto a la base de datos</h2>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Nombre del producto</label>
          <input className='text-black w-full rounded-sm' type='text' onChange={e => setName(e.target.value)} value={name}/>
        </div>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Precio</label>
          <input className='text-black w-full rounded-sm' type='number' min='0' onChange={e => setPrice(e.target.value)} value={price}/>
        </div>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Stock</label>
          <input className='text-black w-full rounded-sm' type='number' min='0' onChange={e => setStock(e.target.value)} value={stock}/>
        </div>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Categoria</label>
          <input className='text-black w-full rounded-sm' type='text' onChange={e => setCategory(e.target.value)} value={category}/>
        </div>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Descripcion</label>
          {/* <input className='text-black w-fulltext' onChange={e => setDescription(e.target.value)} value={description}/> */}
          <textarea className='text-black w-full rounded-sm h-28 overflow-auto resize-none' onChange={e => setDescription(e.target.value)} value={description}/>
        </div>
        <div className='flex flex-col justify-center items-start w-full lg:w-[70%]'>
          <label>Url de imagen</label>
          <input className='text-black w-full rounded-sm' type='text' onChange={e => setImgURL(e.target.value)} value={imgURL}/>
        </div>
        <button className={`${styles.purpleButton} rounded-full`}>
          Subir nuevo producto
        </button>
      </form>
  )
}
