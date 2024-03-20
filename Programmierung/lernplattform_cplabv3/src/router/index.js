import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Aufgaben from '../views/Aufgaben.vue'
import Anleitungen from '../views/Anleitungen.vue'
import Installation_des_Förderbandes from '../views/IdF.vue'
import Installation_der_Bohrstation from '../views/IdB.vue'
import Installation_der_Buschen from '../views/IdBu.vue'
import Aufgabe_zur_Theorie from '../views/AzT.vue'
import Aufgabe_zur_Theorie2 from '../views/AzT2.vue'
import Aufgabe_zur_Theorie3 from '../views/AzT3.vue'
import Aufgabe_zur_Theorie4 from '../views/AzT4.vue'
import Aufgabe_zum_Förderband from '../views/AzF.vue'
import Aufgabe_zum_Förderband2 from '../views/AzF2.vue'
import Aufgabe_zum_Förderband3 from '../views/AzF3.vue'
import Aufgabe_zum_Förderband4 from '../views/AzF4.vue'
import Aufgabe_zum_Förderband_erweitert from '../views/AzFe.vue'
import Aufgabe_zum_Förderband_erweitert2 from '../views/AzFe2.vue'
import Aufgabe_zum_Förderband_erweitert3 from '../views/AzFe3.vue'
import Aufgabe_zum_Förderband_erweitert4 from '../views/AzFe4.vue'
import Aufgabe_zur_Bohrstation from '../views/AzB.vue'
import Aufgabe_zur_Bohrstation2 from '../views/AzB2.vue'
import Aufgabe_zur_Bohrstation3 from '../views/AzB3.vue'
import Aufgabe_zur_Bohrstation4 from '../views/AzB4.vue'
import Aufgabe_Komplett from '../views/AK.vue'
import Aufgabe_Komplett2 from '../views/AK2.vue'
import Aufgabe_Komplett3 from '../views/AK3.vue'
import Aufgabe_Komplett4 from '../views/AK4.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/aufgaben',
    name: 'aufgaben',
    component: Aufgaben
  },
  {
    path: '/anleitungen',
    name: 'Anleitungen',
    component: Anleitungen
  },
  {
    path: '/IdF',
    name: 'IdF',
    component: Installation_des_Förderbandes
  },
  {
    path: '/IdB',
    name: 'IdB',
    component: Installation_der_Bohrstation
  },
  {
    path: '/IdBu',
    name: 'IdBu',
    component: Installation_der_Buschen
  },
  {
    path: '/AzF',
    name: 'AzF',
    component: Aufgabe_zum_Förderband
  },
  {
    path: '/AzB',
    name: 'AzB',
    component: Aufgabe_zur_Bohrstation
  },
  {
    path: '/AzB2',
    name: 'AzB2',
    component: Aufgabe_zur_Bohrstation2
  },
  {
    path: '/AzB3',
    name: 'AzB3',
    component: Aufgabe_zur_Bohrstation3
  },
  {
    path: '/AzB4',
    name: 'AzB4',
    component: Aufgabe_zur_Bohrstation4
  },
  {
    path: '/AzF2',
    name: 'AzF2',
    component: Aufgabe_zum_Förderband2
  },
  {
    path: '/AzF3',
    name: 'AzF3',
    component: Aufgabe_zum_Förderband3
  },
  {
    path: '/AzF4',
    name: 'AzF4',
    component: Aufgabe_zum_Förderband4
  },
  {
    path: '/AzT',
    name: 'AzT',
    component: Aufgabe_zur_Theorie
  },
  {
    path: '/AzT2',
    name: 'AzT2',
    component: Aufgabe_zur_Theorie2
  },
  {
    path: '/AzT3',
    name: 'AzT3',
    component: Aufgabe_zur_Theorie3
  },
  {
    path: '/AzT4',
    name: 'AzT4',
    component: Aufgabe_zur_Theorie4
  },
  {
    path: '/AzFe',
    name: 'AzFe',
    component: Aufgabe_zum_Förderband_erweitert
  },
  {
    path: '/AzFe2',
    name: 'AzFe2',
    component: Aufgabe_zum_Förderband_erweitert2
  },
  {
    path: '/AzFe3',
    name: 'AzFe3',
    component: Aufgabe_zum_Förderband_erweitert3
  },
  {
    path: '/AzFe4',
    name: 'AzFe4',
    component: Aufgabe_zum_Förderband_erweitert4
  },
  {
    path: '/AK',
    name: '/AK',
    component: Aufgabe_Komplett
  },
  {
    path: '/AK2',
    name: '/AK2',
    component: Aufgabe_Komplett2
  },
  {
    path: '/AK3',
    name: '/AK3',
    component: Aufgabe_Komplett3
  },
  {
    path: '/AK4',
    name: '/AK4',
    component: Aufgabe_Komplett4
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
