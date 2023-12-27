import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretView from '../views/Secret.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'registerView',
    component: RegisterView
  },
  {
    path: '/secret',
    name: 'secretView',
    component: SecretView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
