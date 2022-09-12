import {
    CHARACTERS_QUERY,
    LOGIN_QUERY,
    REGISTER_QUERY, TASK_CREATE_QUERY,
    TASK_LIST_QUERY
} from "@/modules/products/graphql/productQueries";
import {ApolloQueryResult} from "@apollo/client";
import graphqlClient from "@/utils/graphql/graphql";

export async function getAllPostsList() {
    return await graphqlClient.query({
        query: CHARACTERS_QUERY,
    });
}

export async function login(loginInput: object) {
    return await graphqlClient.query({
        query: LOGIN_QUERY,
        variables: {loginInput: loginInput}
    });
}

export async function getTaskList() {
    return await graphqlClient.query({
        query: TASK_LIST_QUERY,
        // context: {
        //     headers: {
        //         authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYWxpZEBnbWFpbC5jb20iLCJzdWIiOiI2MzE3MDg5ZDI1NGNmZTYzZjQ0NTFmY2UiLCJpYXQiOjE2NjI4ODYyNTcsImV4cCI6MTY2Mjg4OTg1N30.R_d8I50dgVg2a4bohnnEVJ0XYkEyei6740C6Nfe7gKw'
        //     }
        // }
    });
}

export async function register(signupInput: object) {
    return graphqlClient.mutate({
        mutation: REGISTER_QUERY,
        variables: {signupInput: signupInput},
        update: (cache, {data: {signup}}) => {
            console.log("Can update cache Data from here")
            console.log("signupData", signup)
        },
        // @ts-ignore
        ignoreResults: true //if we want to return data
    });
}

export function createTask(formInput: object): object {

    return graphqlClient.mutate({
        mutation: TASK_CREATE_QUERY,
        variables: {createTaskInput: formInput},
        update: (cache, {data: {createTask}}) => {
            console.log("Can update cache Data from here")
            console.log("cache taskData", createTask)
        },
        // @ts-ignore
        ignoreResults: true //if we want to return data
    });
}