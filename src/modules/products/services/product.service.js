function getAllPostsList() {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.postEndpoint, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}