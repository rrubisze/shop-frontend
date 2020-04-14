import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Shop from '../views/Shop.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Contact from '../views/Contact.vue';
import UserDetail from '../views/UserDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/shop'
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/shop/product/:id',
    name: 'product',
    component: ProductDetail,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserDetail,
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
