import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Aufträge from '../views/Aufträge.vue'

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
    path: '/aufträge',
    name: 'Aufträge',
    component: Aufträge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
