import LoginForm from '@/components/LoginForm'
import useLogin from '@/hooks/useLogin'
import { useState } from 'react'
import { styles } from '@/styles'
import UploadNewProductForm from '@/components/UploadNewItemForm'

function AddItem () {
  const { user } = useLogin()
  const [loginForm, setLoginForm] = useState(false)

  !user && (
    <>
      <div className='w-full text-center'>
        <h2 className={styles.h2}>Lo siento, debes loguearte para subir un producto</h2>
        <button className={`${styles.button} bg-secondary text-white m-2 hover:bg-primary`} onClick={() => setLoginForm(!loginForm)}>login form</button>
      </div>
      {loginForm && <LoginForm /> }
    </>
  )

  return <UploadNewProductForm />
}

export default AddItem
