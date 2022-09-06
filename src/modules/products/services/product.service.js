import {useQuery, useMutation} from "@vue/apollo-composable";

import {CHARACTERS_QUERY, LOGIN_QUERY, REGISTER_QUERY, TASK_LIST_QUERY} from "@/modules/products/graphql/productQueries";

export function getAllPostsList() {
    return useQuery(CHARACTERS_QUERY);
}

export function login(loginInput) {
    return useQuery(LOGIN_QUERY, {loginInput: loginInput});
}

export function getTaskList() {
    return useQuery(TASK_LIST_QUERY, {}, () => ({
            context: {
                headers: {
                    authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYWxpZEBnbWFpbC5jb20iLCJzdWIiOiI2MzE3MDg5ZDI1NGNmZTYzZjQ0NTFmY2UiLCJpYXQiOjE2NjI0NjUyNzgsImV4cCI6MTY2MjQ2ODg3OH0.0RvOwVlpqVsfydvsDV_nSsAupT3U3I_1aNfqb4YFf84'
                }
            }
        }));
}

export function register(signupInput) {
    return useMutation(REGISTER_QUERY, () => ({
        variables: {signupInput: signupInput},
        update: (cache, { data: { signup } }) => {
            console.log(signup)
        }
    }));
}