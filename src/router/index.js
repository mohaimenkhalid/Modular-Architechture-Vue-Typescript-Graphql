import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/Login'

const routes = [
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
