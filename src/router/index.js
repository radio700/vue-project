import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'//보여줄 vue 컴포넌트
import DataBinding from '../views/DataBinding.vue'//보여줄 vue 컴포넌트
import DataBindingMiddle from '../views/DataBindingMiddle.vue'//보여줄 vue 컴포넌트

const routes = [
  {
    path: '/',
    name: 'home',//보여줄 vue 컴포넌트
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingMiddle',
    name: 'DataBindingMiddle',
    component: DataBindingMiddle
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
