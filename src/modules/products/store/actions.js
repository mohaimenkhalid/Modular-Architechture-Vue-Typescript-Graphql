import * as productService from '@/modules/products/services/product.service'
import * as types from "./mutation-types";

export const getPostList =  async ({commit}) => {
    try {
        const response =  await productService.getAllPostsList()
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const login = async (_, loginInput) => {
    try {
        const response = await productService.login(loginInput)
        console.log("login", response)
    } catch (e) {
        console.log(e.message)
    }
}

export const register = async (_, formInput) => {
    try {
        const response = await productService.register(formInput)
        console.log("signup", response)
    } catch (e) {
        console.log(e)
    }
}

export const getTaskList = async ({commit}) => {
    try {
        const response = await productService.getTaskList()
        commit(types.SET_TASK_LIST, response.data.tasks)
    } catch (e) {
        console.log(e)
    }
}

export const createTask = async (_, formInput) => {
    try {
        const response = await productService.createTaskInput(formInput)
        console.log("createTaskInput", response)
    } catch (e) {
        console.log(e)
    }
}
