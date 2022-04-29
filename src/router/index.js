import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')

  },
  {
    path: '/index/login',
    name: 'login',
    component: () => import( '../views/index/index/index.vue')

  },
  {
    path: '/index/register',
    name: 'register',
    component: () => import( '../views/index/index/register.vue')

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //后台登录
  {
    path: '/admin/login',
    name: 'A_Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Login.vue')

  },
  //废弃方法
  {
    path: '/admin/index',
    name: 'A_index',
    component: () => import('../views/admin/index/index.vue'),
  

  },
  // 商品列表
  {
    path: '/goods/index',
    component: () => import('../views/admin/goods/index.vue')

  },
  // 商品添加
  {
    path: '/goods/add',
    component: () => import('../views/admin/goods/add.vue')

  },
  // 品牌添加
  {
    path: '/brand/add',
    component: () => import('../views/admin/brand/add.vue')

  },
  // 品牌列表
  {
    path: '/brand/index',
    component: () => import('../views/admin/brand/index.vue')

  },
  // 分类添加
  {
    path: '/cate/add',
    component: () => import('../views/admin/cate/add.vue')

  },
  // 分类列表
  {
    path: '/cate/index',
    component: () => import('../views/admin/cate/index.vue')

  },
   // 管理员添加
   {
    path: '/index/add',
    component: () => import('../views/admin/index/add.vue')

  },
  // 管理员列表
  {
    path: '/index/index',
    component: () => import('../views/admin/index/index.vue')

  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
