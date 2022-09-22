import { ApolloClient, InMemoryCache, concat, createHttpLink } from '@apollo/client/core'

const httpLink = createHttpLink({ uri: process.env.VUE_APP_API_BASE_URL });

import authMiddleware from "@/utils/graphql/authMiddleware";

export default new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});