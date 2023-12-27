import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl5RAoZx-MTBsaCyPT6lOCJk362L3df5Q",
  authDomain: "vue-fire-auth-da.firebaseapp.com",
  projectId: "vue-fire-auth-da",
  storageBucket: "vue-fire-auth-da.appspot.com",
  messagingSenderId: "1081464716647",
  appId: "1:1081464716647:web:6d96508394a2c5169b43c2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }