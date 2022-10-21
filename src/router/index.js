import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import UniversityPage from '@/views/UniversityPage.vue'
import ModulePage from '@/views/ModulePage.vue'
import ModuleMappingPage from '@/views/ModuleMappingPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/UniversityPage",
        name: "UniversityPage",
        component: UniversityPage,
      },
      {
        path: "/ModulePage",
        name: "ModulePage",
        component: ModulePage,
      },
      {
        path: "/ModuleMappingPage",
        name: "ModuleMappingPage",
        component: ModuleMappingPage,
      },
      {
        path: "/RegisterPage",
        name: "RegisterPage",
        component: () => import('../views/Register.vue')
      },
      {
        path: "/SignInPage",
        name: "SignInPage",
        component: () => import('../views/Signin.vue')
      },
      {
        path: "/ProfilePage",
        name: "ProfilePage",
        component: () => import('../views/ProfilePage.vue')
      }
    ],
});
  
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth().currentUser){
//       next()
//     } else {
//       alert('you need to log in first')
//       next('/SignInPage')
//     }
//   }
// })

export default router;