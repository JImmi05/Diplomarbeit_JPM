import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Aufgaben from '../views/Aufgaben.vue'
import Anleitungen from '../views/Anleitungen.vue'
import Installation_des_Förderbandes from '../views/IdF.vue'
import Installation_der_Bohrstation from '../views/IdB.vue'
import Installation_der_Buschen from '../views/IdBu.vue'
import Aufgabe_zum_Förderband from '../views/AzF.vue'
import Aufgabe_zum_Förderband2 from '../views/AzF2.vue'
import Aufgabe_zum_Förderband3 from '../views/AzF3.vue'
import Aufgabe_zum_Förderband4 from '../views/AzF4.vue'
import Aufgabe_zum_Sensor from '../views/AzS.vue'
import Aufgabe_zur_Bohrstation from '../views/AzB.vue'
import store from '../store';


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
    path: '/AzS',
    name: 'AzS',
    component: Aufgabe_zum_Sensor
  },
  {
    path: '/AzB',
    name: 'AzB',
    component: Aufgabe_zur_Bohrstation
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
    path: '/aufgaben',
    component: () => {
      const userProgress = store.state.progress;
      if (userProgress === 25) {
        return import('../views/AzF2.vue');
      } else if (userProgress === 50) {
        return import('../views/AzF3.vue');
      } else if (userProgress === 75) {
        return import('../views/AzF4.vue');
      } else if (userProgress !== 100) {
        return import('../views/AzF2.vue');
      }
      else {
        return import('../views/AzF.vue')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
