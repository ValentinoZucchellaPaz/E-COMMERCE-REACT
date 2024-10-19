import useLogin from '@/hooks/useLogin'
import Eye from '@/icons/Eye'
import EyeClosed from '@/icons/EyeClosed'
import { styles } from '@/styles'
import React, { useRef, useState } from 'react'

function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const passwordRef = useRef()
  const { handleSignIn, error } = useLogin()

  function togglePasswordVisibility () {
    setPasswordVisible(!passwordVisible)

    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
    } else {
      passwordRef.current.type = 'password'
    }
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    const formattedValue = value.replace(/\s/g, '')
    setPassword(formattedValue)
  }

  function handleSubmit (e) {
    e.preventDefault()
    handleSignIn(email, password)
    setEmail('')
    setPassword('')
  }

  return (
          <form className=' p-10 mx-auto rounded-lg shadow-lg bg-secondary text-white flex flex-col gap-6 justify-center items-center w-auto md:w-1/2' onSubmit={handleSubmit}>
            <h2 className='text-xl text-center w-full font-semibold'>Login</h2>
            <div className='flex flex-col gap-2 w-'>
              <label>Email:</label>
              <input className='text-black px-2 py-1 rounded-sm font-medium' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div className='flex flex-col gap-2 w-'>
              <label>Password:</label>
              <div className='relative'>
                <input ref={passwordRef} className='text-black px-2 py-1 rounded-sm font-medium' type='password' onChange={handlePasswordChange} value={password}/>
                <span onClick={togglePasswordVisibility} className='cursor-pointer w-fit text-black absolute top-1 right-1'>{passwordVisible ? <EyeClosed /> : <Eye />}</span>
              </div>

            </div>
            <button className={styles.purpleButton}>Login</button>
            {error && <p className=' text-red-600'>{error}</p>}
          </form>
  )
}

export default LoginForm
