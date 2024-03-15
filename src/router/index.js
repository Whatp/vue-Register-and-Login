import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: ()=>import("../views/Login.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path:'/',
    name:'home',
    component:()=>import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
