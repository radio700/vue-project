import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'//보여줄 vue 컴포넌트
import ParentComp from '@/views/childPreantExample/ptoc/ParentComp.vue'
import ParentComp2 from '@/views/childPreantExample/ctop/ParentComp2.vue'
const routes = [
    {
        path: "/",
        name: "home", //보여줄 vue 컴포넌트
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/parentcomp",
        name: "ParentComp", //보여줄 vue 컴포넌트
        component: ParentComp,
    },
    {
        path: "/parentcomp2",
        name: "ParentComp2", //보여줄 vue 컴포넌트
        component: ParentComp2,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
