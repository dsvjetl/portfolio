import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: () => import('./views/NotFoundView.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/projects/:projectName',
        name: 'ProjectView',
        component: () => import('./views/ProjectView.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    },
});

export default router;
