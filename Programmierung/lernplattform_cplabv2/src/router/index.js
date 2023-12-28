import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/startseite", component: () => import("../views/Startseite.vue")},
    { path: "/register", component: () => import("../views/RegisterForm.vue")},
    { path: "/sign-in", component: () => import("../views/SignIn.vue")},
    { path: "/feed", component: () => import("../views/Feed.vue")},
  ],
});

export default router
