import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAkEz_C-uRid4xznChepeSg5FTP5dT_-M",
  authDomain: "vue-auth-da.firebaseapp.com",
  projectId: "vue-auth-da",
  storageBucket: "vue-auth-da.appspot.com",
  messagingSenderId: "570472278786",
  appId: "1:570472278786:web:94ba1e4189d60d1272301b"
}

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }

