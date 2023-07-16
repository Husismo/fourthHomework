export default (api) => {
    api.getAllProjects = {
        
        getAllProjects(payload) {
            return api.instance.post(`/projects/search`, payload)
        },
    };
};