// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEhigB3cYE8YmVc9wUZ9PM07mNv40Zd8w',
  authDomain: 'fist-and-kicks.firebaseapp.com',
  projectId: 'fist-and-kicks',
  storageBucket: 'fist-and-kicks.appspot.com',
  messagingSenderId: '852488682262',
  appId: '1:852488682262:web:df912b69732f8626092e37'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
