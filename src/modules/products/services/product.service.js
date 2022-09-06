import {useQuery, useMutation} from "@vue/apollo-composable";
import {CHARACTERS_QUERY, LOGIN_QUERY, REGISTER_QUERY} from "@/modules/products/graphql/productQueries";

export function getAllPostsList() {
    return useQuery(CHARACTERS_QUERY);
}

export function login(loginInput) {
    return useQuery(LOGIN_QUERY, {loginInput: loginInput});
}

export function register(signupInput) {
    console.log(signupInput)
    return useMutation(REGISTER_QUERY, () => ({
        variables: {signupInput: signupInput},
        update: (cache, { data: { signup } }) => {
            console.log(signup)
        }
    }));
}