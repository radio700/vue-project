import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'//보여줄 vue 컴포넌트
import ParentComp from '@/views/childPreantExample/ptoc/ParentComp.vue'
import ParentComp2 from '@/views/childPreantExample/ctop/ParentComp2.vue'
import ParentParentComponent from '@/views/childPreantExample/provide_inject/ParentParentComponent.vue'
import GetCalculator from '@/views/compositionApi/GetCalculator.vue'
import GetCalculator2 from '@/views/compositionApi/GetCalculator2.vue'
import Reactive_partner from '@/views/react_ref/Reactive_partner.vue'
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
        name: "ParentComp",
        component: ParentComp,
    },
    {
        path: "/parentcomp2",
        name: "ParentComp2",
        component: ParentComp2,
    },
    {
        path: "/parentparentcomponent",
        name: "parentparentcomponent",
        component: ParentParentComponent,
    },
    {
        path: "/getcalculator",
        name: "getcalculator",
        component: GetCalculator,
    },
    {
        path: "/getcalculator2",
        name: "getcalculator2",
        component: GetCalculator2,
    },
    {
        path: "/reactivepartner",
        name: "getcalculator2",
        component: Reactive_partner,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
