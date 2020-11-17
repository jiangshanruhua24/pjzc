import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "@/views/home/Home"
const routes = [
   {
      path: '/home',
      name: 'Home',
      component: Home
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import("@/views/login/Login")
   },
   {
      path: '/profile',
      name: 'Profile',
      component: () => import("@/views/profile/Profile")
   },
   {
      path: '/service',
      component: () => import('@/views/profile/prochild/service.vue')
   },
   {
      path: '/perinfo',
      component: () => import('@/views/profile/prochild/perinfo.vue')
   },

   {
      path: 'reg',
      name: 'Register',
      component: () => import("@/views/login/Register")
   },
   // {
   //    path: '/forgetpwd',
   //    name: 'forgetpwd',
   //    component: () => import("@/views/forgetpwd/forgetpwd")
   // },

   {
      path: '/detail',
      name: 'Detail',
      component: () => import("@/views/detail/Detail")

   },
   {
      path: '/evaluate',
      name: 'Evaluate',
      component: () => import("@/views/detail/Evaluate")
   }
]

const router = new VueRouter({
   routes
})

export default router
