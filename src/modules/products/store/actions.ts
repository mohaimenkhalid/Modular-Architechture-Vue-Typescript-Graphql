import * as productService from '@/modules/products/services/product.service'
import {LoginForm} from "@/modules/products/interfaces/authTypes";

import {ActionTree, ActionContext} from 'vuex'
import {State} from './state'
import {Mutations} from './mutations'
import * as MutationTypes from "./mutation-types";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    login(
        {commit}: AugmentedActionContext,
        payload: LoginForm
    ): void

    // Promise<number>
}

export const actions: ActionTree<State, State> & Actions = {
    async login({commit}, loginInput) {
        console.log(loginInput)
        try {
            const response = await productService.login(loginInput)
            console.log("login", response.data.login.access_token)
            localStorage.setItem('token', response.data?.login?.access_token)
        } catch ({message}) {
            console.log(message)
        }
    }
}


export const getPostList = async () => {
    try {
        const response = await productService.getAllPostsList()
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const login = async ({commit}: any, loginInput: LoginForm) => {
    console.log(loginInput)
    try {
        const response = await productService.login(loginInput)
        console.log("login", response.data.login.access_token)
        localStorage.setItem('token', response.data?.login?.access_token)
    } catch ({message}) {
        console.log(message)
    }
}

export const register = async (context: any, formInput: any) => {
    try {
        const response = await productService.register(formInput)
        console.log("signup", response)
    } catch (e) {
        console.log(e)
    }
}

export const getTaskList = async (context: any) => {
    try {
        const response = await productService.getTaskList()
        context.commit(MutationTypes.SET_TASK_LIST, response.data.tasks)
    } catch (e) {
        console.log(e)
    }
}

export const createTask = async (context: any, formInput: any) => {
    try {
        const response = await productService.createTask(formInput)
        console.log("createTaskInput", response)
    } catch (e) {
        console.log(e)
    }
}
