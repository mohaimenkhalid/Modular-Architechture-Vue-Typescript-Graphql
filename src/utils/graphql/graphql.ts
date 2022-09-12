import { ApolloClient, InMemoryCache, concat, createHttpLink } from '@apollo/client/core'



const httpLink = createHttpLink({ uri: 'http://localhost:3000/graphql' });

import authMiddleware from "@/utils/graphql/authMiddleware";

export default new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});