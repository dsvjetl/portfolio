import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFoundView from '@/views/NotFoundView.vue';
import Home from '@/views/Home.vue';
import ProjectView from '@/views/ProjectView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: NotFoundView,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/project/:projectName',
        name: 'ProjectView',
        component: ProjectView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
