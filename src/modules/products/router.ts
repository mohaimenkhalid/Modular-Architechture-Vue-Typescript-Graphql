import { RouteRecordRaw } from 'vue-router';
import productPage from "@/modules/products/views/productPage.vue";
import Registration from "@/modules/products/views/registration.vue";
import taskListPage from "@/modules/products/views/taskListPage.vue";
import taskCreate from "@/modules/products/views/taskCreate.vue";

const moduleRoute = <RouteRecordRaw>{
    path: "/product",
    component: productPage,
    children: [
        {
            path: "/",
            component: productPage
        },
        {
            path: "/test",
            component: productPage
        },
        {
            path: "/registration",
            component: Registration
        },
        {
            path: "/task-list",
            component: taskListPage
        },
        {
            path: "/task-create",
            component: taskCreate
        }
    ]
};

export default moduleRoute;