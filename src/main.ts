import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import { registerModules } from "./register-modules";
import productsModule from "@/modules/products";
import Error from "@/components/common/Error.vue";

// import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
// import { ApolloClient, InMemoryCache } from '@apollo/client/core'
//
//
// const cache = new InMemoryCache()
//
// const apolloClient = new ApolloClient({
//     cache,
//     uri: 'https://rickandmortyapi.com/graphql',
//     //uri: 'http://localhost:3000/graphql',
// })
// provideApolloClient(apolloClient);

const app = createApp({
    // setup () {
    //     provide(DefaultApolloClient, apolloClient)
    // },
    render: () => h(App),
})



registerModules({
    products: productsModule,
});

app.use(router);
app.use(store);
app.component('Error', Error);
app.mount('#app')
