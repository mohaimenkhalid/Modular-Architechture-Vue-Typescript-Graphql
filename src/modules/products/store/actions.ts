import {ActionTree} from 'vuex'
import * as productService from '@/modules/products/services/product.service'
import {Actions} from "@/modules/products/interfaces/vuex/Actions";
import {State} from './state'
import * as MutationTypes from "./mutation-types";

export const actions: ActionTree<State, State> & Actions = {
    async login({commit}, loginInput) {
        try {
            const response = await productService.login(loginInput)
            console.log("login", response.data.login.access_token)
            localStorage.setItem('token', response.data?.login?.access_token)
        } catch ({message}) {
            console.log(message)
        }
    },
    async getTaskList({commit}) {
        try {
            const response = await productService.getTaskList()
            commit(MutationTypes.SET_TASK_LIST, response.data.tasks)
        } catch (e) {
            console.log(e)
        }
    },
    async createTask({commit}, formInput) {
        try {
            const response = await productService.createTask(formInput)
            console.log("createTaskInput", response)
        } catch (e) {
            console.log(e)
        }
    },
    async register({commit}, formInput) {
        try {
            const response = await productService.register(formInput)
            console.log("signup", response)
        } catch (e) {
            console.log(e)
        }
    }
}


// export const getPostList = async () => {
//     try {
//         const response = await productService.getAllPostsList()
//         console.log(response)
//     } catch (e) {
//         console.log(e)
//     }
// }

// export const login = async ({commit}: any, loginInput: LoginForm) => {
//     console.log(loginInput)
//     try {
//         const response = await productService.login(loginInput)
//         console.log("login", response.data.login.access_token)
//         localStorage.setItem('token', response.data?.login?.access_token)
//     } catch ({message}) {
//         console.log(message)
//     }
// }

// export const register = async (context: any, formInput: any) => {
//     try {
//         const response = await productService.register(formInput)
//         console.log("signup", response)
//     } catch (e) {
//         console.log(e)
//     }
// }

// export const getTaskList = async (context: any) => {
//     try {
//         const response = await productService.getTaskList()
//         context.commit(MutationTypes.SET_TASK_LIST, response.data.tasks)
//     } catch (e) {
//         console.log(e)
//     }
// }

// export const createTask = async (context: any, formInput: any) => {
//     try {
//         const response = await productService.createTask(formInput)
//         console.log("createTaskInput", response)
//     } catch (e) {
//         console.log(e)
//     }
// }
