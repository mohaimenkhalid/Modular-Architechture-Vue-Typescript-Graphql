import productPage from "@/modules/products/views/productPage";

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
        }
    ]
};

export default moduleRoute;