import {useQuery} from "@vue/apollo-composable";
import {CHARACTERS_QUERY, LOGIN} from "@/modules/products/graphql/productQueries";

export function getAllPostsList() {
    return useQuery(CHARACTERS_QUERY);
}

export function login(loginInput) {
    return useQuery(LOGIN, {loginInput: loginInput});
}