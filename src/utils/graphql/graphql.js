import { ApolloClient, InMemoryCache, concat, createHttpLink } from '@apollo/client/core'



const httpLink = new createHttpLink({ uri: 'http://localhost:3000/graphql' });

import authMiddleware from "@/utils/graphql/authMiddleware";

export default new ApolloClient({
    //uri: 'https://rickandmortyapi.com/graphql', //example query
    link: concat(authMiddleware, httpLink),
    httpLink,
    cache: new InMemoryCache(),
});