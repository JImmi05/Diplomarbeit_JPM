import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyDAkEz_C-uRid4xznChepeSg5FTP5dT_-M",
    authDomain: "vue-auth-da.firebaseapp.com",
    projectId: "vue-auth-da",
    storageBucket: "vue-auth-da.appspot.com",
    messagingSenderId: "570472278786",
    appId: "1:570472278786:web:94ba1e4189d60d1272301b"
  };

  firebase.initializeApp(firebaseConfig);

  
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
