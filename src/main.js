import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import { registerModules } from "./register-modules";
import productsModule from "@/modules/products";

const app = createApp(App)

registerModules({
    products: productsModule,
});

app.use(router);
app.use(store);
app.mount('#app')
