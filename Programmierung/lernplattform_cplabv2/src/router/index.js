import { createRouter, createWebHistory } from 'vue-router'
//import { getCurrentUser } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/startseite", component: () => import("../views/Startseite.vue")},
    { path: "/register", component: () => import("../views/RegisterForm.vue")},
    { path: "/sign-in", component: () => import("../views/SignIn.vue")},
    { path: "/anleitung", component: () => import("../views/Anleitungen.vue")},
    { path: "/auftraege", component: () => import("../views/Aufträge.vue")},

    { 
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

//router.beforeEach(async(to, from, next) => {
//  if (to.matched.some((record) => record.meta.requiresAuth)) {
//    if (await getCurrentUser()) {
//      next();
//    } else {
//      alert("Du hast keinen Zugriff!")
//      next("/startseite");
//    }
//  } else {
//    next();
//  }
//});
export default router;
