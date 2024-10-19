import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from './config'

// export function LoginWithEmail (email, password) {
//   return signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       console.log('success')
//       return mapUserFromFirebaseAuth(userCredential.user)
//     })
//     .catch(e => {
//       // console.log('hubo un error')
//       // return { errorCode: e.code, errorMessage: e.message }
//       throw new Error(e.message)
//     })
// }

export function LoginWithEmail (email, password) {
  return new Promise((resolve, reject) => {
    // validaciones de email
    signInWithEmailAndPassword(auth, email, password)
      .then(credentials => {
        console.log(credentials)
        const user = mapUserFromFirebaseAuth(credentials)
        resolve(user)
      })
      .catch(err => reject(err))
  })
}

function mapUserFromFirebaseAuth (user) {
  const { email } = user
  return { email }
}

export function onAuthStateChangeOfUser (onChange) {
  onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}
