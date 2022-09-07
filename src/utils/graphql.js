import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default new ApolloClient({
    //uri: 'https://rickandmortyapi.com/graphql',
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});