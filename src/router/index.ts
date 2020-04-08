import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Shop from '../views/Shop.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
