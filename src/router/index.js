import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
   {
      path: '/',//首页
      name: 'index',
      component: ()=>import ('@/views/home/Index')
   },
   {
      path: '/home',//首页
      name: 'index',
      component: ()=>import ('@/views/home/Index')
   },
   {
      path: '/login',
      name: 'Login',//登录
      component: () => import("@/views/login/Login")
   },
   {
      path: '/reg',//注册
      name: 'Register',
      component: () => import("@/views/login/Register")
   },
   {
      path:'/passback',//找回密码
      component:()=> import('@/views/login/passback')
  },
  {
   path:'/updpass',//修改密码
   component:()=> import('@/views/login/updPass')
},
{
   path:'/selectcar',//挑选车型
   component:()=> import ('@/views/select/selectcar')
},
   {
      path: '/profile',
      name: 'Profile',//我的订单
      component: () => import("@/views/profile/Profile")
   },
   {
      path: '/detail',//订单详情支付
      name: 'orderDetail',
      component: () => import("@/views/detail/Detail")
   },
   {
      path: '/detailover',//订单详情1.0
      name: 'orderDetail',
      component: () => import("@/views/detail/detailchild/DetailOver")
   },
   {
      path:'/ordermessage',//订单通知2.0
      component:()=> import ('@/views/detail/Order_details')
   },
   {
      path: '/evaluate',
      name: 'Evaluate',//评价
      component: () => import("@/views/detail/Evaluate")
   },
   {
      path: '/service',//服务规则
      component: () => import('@/views/profile/prochild/service.vue')
   },
   {
      path: '/perinfo',//个人信息
      component: () => import('@/views/profile/prochild/perinfo.vue')
   }
   ,{
      path:'/personcenter',//个人中心
      component:()=> import ('@/views/profile/Personal_center')
   },{
      path:'/set',//设置
      component:()=> import ('@/views/profile/prochild/Set')
   },{
      path:'/mywallet',//我的钱包
      component:()=> import ('@/views/profile/mywallet')
   },{
      path: '/servicecenter',//客服中心
      name: 'servicecenter',
      component: () => import("@/views/profile/servicecenter")
   },
]

const router = new VueRouter({
   routes
})

export default router
