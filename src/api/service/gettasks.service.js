export default (api) => {
    api.getAllTasks = {
        getAllTasks(payload) {
            return api.instance.post(`/tasks/search`, payload)
        },
    };
};