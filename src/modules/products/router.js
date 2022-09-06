import productPage from "@/modules/products/views/productPage";
import Registration from "@/modules/products/views/registration";

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
        }
    ]
};

export default moduleRoute;