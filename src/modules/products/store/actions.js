export const fetchPostsList = ({ commit }, product) => {
    commit("SET_LOADING", true)
    postService.getAllPostsList()
        .then(res=> {
            commit("SET_POSTS", res)
            commit("SET_LOADING", false)
        })
}