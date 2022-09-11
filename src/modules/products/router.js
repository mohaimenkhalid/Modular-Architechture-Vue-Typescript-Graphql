import productPage from "@/modules/products/views/productPage";
import Registration from "@/modules/products/views/registration";
import taskListPage from "@/modules/products/views/taskListPage";
import taskCreate from "@/modules/products/views/taskCreate";

const moduleRoute = {
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