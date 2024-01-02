import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkEz_C-uRid4xznChepeSg5FTP5dT_-M",
  authDomain: "vue-auth-da.firebaseapp.com",
  projectId: "vue-auth-da",
  storageBucket: "vue-auth-da.appspot.com",
  messagingSenderId: "570472278786",
  appId: "1:570472278786:web:94ba1e4189d60d1272301b"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')