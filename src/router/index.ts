import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../modules/products/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router;
