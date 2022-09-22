import {ApolloLink} from "@apollo/client/core";
import {onError} from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token');
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : "",
        },
    });
    return forward(operation);
});

const errorLink = onError(error => {
    console.log("global error")
    console.log(error)
})


export default authMiddleware.concat(errorLink);