import * as productService from '@/modules/products/services/product.service'

export const getPostList = async () => {
    try {
        const data = await productService.getAllPostsList()
        console.log("aaaaa", data)
    } catch (e) {
        console.log(e)
    }
}

export const login = async (_, loginInput) => {
    try {
        const data = await productService.login(loginInput)
        console.log("login", data)
    } catch (e) {
        console.log(e)
    }
}