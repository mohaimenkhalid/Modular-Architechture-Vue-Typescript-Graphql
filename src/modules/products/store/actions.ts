import * as productService from '@/modules/products/services/product.service'
import * as types from "./mutation-types";

export const getPostList =  async () => {
    try {
        const response =  await productService.getAllPostsList()
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const login = async ({commit}: any, loginInput: any) => {
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
        context.commit(types.SET_TASK_LIST, response.data.tasks)
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
