import { ApolloClient, InMemoryCache, ApolloLink, concat, createHttpLink } from '@apollo/client/core'



const httpLink = new createHttpLink({ uri: 'http://localhost:3000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token');
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        },
    });
    return forward(operation);
});

export default new ApolloClient({
    //uri: 'https://rickandmortyapi.com/graphql',
    link: concat(authMiddleware, httpLink),
    httpLink,
    cache: new InMemoryCache(),
});