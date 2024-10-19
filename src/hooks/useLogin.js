import { useState, useEffect } from 'react'
import { onAuthStateChangeOfUser, LoginWithEmail } from '@/firebase/auth'

function getErrorMessage (errorCode) {
  switch (errorCode) {
    case 'auth/wrong-password':
      return 'Usuario o contraseña incorrectos.'
    case 'auth/user-not-found':
      return 'Usuario no encontrado.'
    default:
      return 'Error desconocido. Por favor, inténtalo de nuevo más tarde.'
  }
}

export default function useLogin () {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const handleSignIn = (email, password) => {
    LoginWithEmail(email, password)
      .then(user => {
        console.log(user)
        setUser(user)
      })
      .catch(err => {
        const errorMessage = getErrorMessage(err.code)
        setError(errorMessage)
      })
  }

  useEffect(() => {
    onAuthStateChangeOfUser(setUser)
  }, [])

  useEffect(() => {
    console.log('actualizado desde custom hook')
    console.log(error)
  }, [user, error])

  return { user, handleSignIn, error }
}
