export default (api) => {
    api.getAllUsers = {
        getAllUsers(payload) {
            return api.instance.post(`/users/search`, payload)
        },
    };
};