import { createRouter, createWebHistory, getAuth } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home.vue")},
    { path: "/register", component: () => import("../views/RegisterForm.vue")},
    { path: "/sign-in", component: () => import("../views/SignIn.vue")},
    { 
      path: "/feed", 
      component: () => import("../views/Feed.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((recorded) => recorded.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router
