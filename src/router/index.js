import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router;
