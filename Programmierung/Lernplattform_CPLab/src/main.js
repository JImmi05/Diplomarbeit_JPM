import Startseite from './components/Startseite.vue'
import Aufträge from './components/Aufträge.vue'
import Anleitungen from './components/Anleitungen.vue'
import Profil from './components/Profil.vue'
import Profil_erstellen from './components/Profil_erstellen.vue'
import App from './App.vue'
import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: Startseite },
  {path: '/aufträge', component: Aufträge },
  {path: '/anleitungen', component: Anleitungen },
  {path: '/profil', component: Profil },
  {path: '/profil_erstellen', component: Profil_erstellen },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })


const app = createApp(App)
app.use(router)
app.mount('#app')










