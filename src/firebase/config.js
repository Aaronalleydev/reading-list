import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUlcW_7_6-gmwD3f0JaZHpRm3WtJjBnSA",
  authDomain: "reading-list-95df9.firebaseapp.com",
  projectId: "reading-list-95df9",
  storageBucket: "reading-list-95df9.appspot.com",
  messagingSenderId: "363162002889",
  appId: "1:363162002889:web:393a26a5bfb9cea41c3418"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }