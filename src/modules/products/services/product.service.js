import {
    CHARACTERS_QUERY,
    LOGIN_QUERY,
    REGISTER_QUERY, TASK_CREATE_QUERY,
    TASK_LIST_QUERY
} from "@/modules/products/graphql/productQueries";
import graphqlClient from "@/utils/graphql";

export async function getAllPostsList() {
    return await graphqlClient.query({
        query: CHARACTERS_QUERY,
    });
}

export async function login(loginInput) {
    return await graphqlClient.query({
        query: LOGIN_QUERY,
        variables: {loginInput: loginInput}
    });
}

export async function getTaskList() {
    return await graphqlClient.query({
        query: TASK_LIST_QUERY,
        context: {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFAZ21haWwuY29tIiwic3ViIjoiNjMxZDlmM2M2NmM0MTliZDU4NWQ3YTE5IiwiaWF0IjoxNjYyODkyMTkxLCJleHAiOjE2NjI4OTU3OTF9.o9mHS3Qz4Q0I_kS-BqcRYE60zZKYWkRkj7l4_wheiUs'
            }
        }
    });
}

export async function register(signupInput) {
    return graphqlClient.mutate({
        mutation: REGISTER_QUERY,
        variables: {signupInput: signupInput},
        update: (cache, {data: {signup}}) => {
            console.log("Can update cache Data from here")
            console.log("signupData", signup)
        },
        ignoreResults: true //if we want to return data
    });
}

export async function createTaskInput(formInput) {

    return graphqlClient.mutate({
        mutation: TASK_CREATE_QUERY,
        context: {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFAZ21haWwuY29tIiwic3ViIjoiNjMxZDlmM2M2NmM0MTliZDU4NWQ3YTE5IiwiaWF0IjoxNjYyODkyMTkxLCJleHAiOjE2NjI4OTU3OTF9.o9mHS3Qz4Q0I_kS-BqcRYE60zZKYWkRkj7l4_wheiUs'
            }
        },
        variables: {createTaskInput: formInput},
        update: (cache, {data: {tasks}}) => {
            console.log("Can update cache Data from here")
            console.log("taskData", tasks)
        },
        ignoreResults: true //if we want to return data
    });
}