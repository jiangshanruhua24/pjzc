import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/Login"

Vue.use(VueRouter)

const routes = [
   {
      path: '/service',
      component: () => import('./../components/service.vue')
   },
   {
      path: '/reg',
      component: () => import('./../views/Register.vue')
   },
   {
      path: '/perinfo',
      component: () => import('./../components/perinfo.vue')
   },
   {
      path: '/',
      name: 'Login',
      component: Login
   },
   // {
   //    path: 'reg',
   //    name: 'Register',
   //    component: () => import("@/views/register/Register")
   // },
   // {
   //    path: '/forgetpwd',
   //    name: 'forgetpwd',
   //    component: () => import("@/views/forgetpwd/forgetpwd")
   // },
   {
      path: '/home',
      name: 'Home',
      component: () => import("@/views/home/Home")
   },
   {
      path: '/detail',
      name: 'Detail',
      component: () => import("@/views/home/detail/Detail")
   },
   {
      path: '/evaluate',
      name: 'Evaluate',
      component: () => import("@/views/home/detail/Evaluate")
   }
]

const router = new VueRouter({
   routes
})

export default router
